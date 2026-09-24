/* Safe expression parser; delegates functions to the pinned Formula.js bundle. */
const SheetEngine = (() => {
  const error = code => { throw new Error(code); };
  const col = n => { let s=''; for(n++;n;n=Math.floor((n-1)/26)) s=String.fromCharCode(65+(n-1)%26)+s; return s; };
  const coord = ref => { const m=/^\$?([A-Z]+)\$?(\d+)$/i.exec(ref); if(!m) return error('#REF!'); return [Number(m[2])-1,[...m[1].toUpperCase()].reduce((s,c)=>s*26+c.charCodeAt(0)-64,0)-1]; };
  const address = (r,c) => col(c)+(r+1);
  function parse(source) {
    if(source.length>2000)error('#VALUE!');
    const tokens=[]; let i=0;
    while(i<source.length) {
      if(/\s/.test(source[i])) {i++;continue;}
      const m=/^("(?:[^"]|"")*"|'(?:[^']|'')*'|(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?|\$?[A-Za-z_][A-Za-z_0-9.$]*|<>|<=|>=|[+\-*/^&=<>(),:!%])/.exec(source.slice(i));
      if(!m) error('#VALUE!'); tokens.push(m[0]); i+=m[0].length;
    }
    let p=0;
    const precedence={'=':1,'<>':1,'<':1,'>':1,'<=':1,'>=':1,'&':2,'+':3,'-':3,'*':4,'/':4,'^':5};
    function atom() {
      let t=tokens[p++]; if(t===undefined) error('#VALUE!');
      let n;
      if(t==='+'||t==='-') n={type:'unary',op:t,value:atom()};
      else if(t==='(') {n=expr(0);if(tokens[p++]!==')')error('#VALUE!');}
      else if(t[0]==='"') n={type:'value',value:t.slice(1,-1).replace(/""/g,'"')};
      else if(/^\d|^\.\d/.test(t)) n={type:'value',value:Number(t)};
      else if(tokens[p]==='(') {
        p++;const args=[];
        if(tokens[p]!==')') {do{args.push(expr(0));}while(tokens[p]===','&&++p);}
        if(tokens[p++]!==')')error('#VALUE!'); n={type:'call',name:t.toUpperCase(),args};
      } else {
        let sheet=null;
        if(tokens[p]==='!') {sheet=t.replace(/^'|'$/g,'').replace(/''/g,"'");p++;t=tokens[p++];}
        if(/^(TRUE|FALSE)$/i.test(t)&&!sheet)n={type:'value',value:t.toUpperCase()==='TRUE'};
        else {
          if(!/^\$?[A-Z]+\$?\d+$/i.test(t))error('#NAME?');
          n={type:'ref',ref:t.toUpperCase(),sheet};
          if(tokens[p]===':'){p++;const end=tokens[p++];coord(end);n={type:'range',start:t,end,sheet};}
        }
      }
      while(tokens[p]==='%'){p++;n={type:'binary',op:'/',left:n,right:{type:'value',value:100}};}
      return n;
    }
    function expr(min) {let left=atom();while(precedence[tokens[p]]>=min){const op=tokens[p++],v=precedence[op];left={type:'binary',op,left,right:expr(v+1)};}return left;}
    const root=expr(0);if(p!==tokens.length)error('#VALUE!');return root;
  }
  function calculator(workbook) {
    const cache=new Map(),visiting=new Set();
    function cell(sheet,ref) {
      const [r,c]=coord(ref);if(r<0||c<0||r>=120||c>=26)error('#REF!');
      ref=address(r,c);const key=sheet.id+'!'+ref;
      if(cache.has(key))return cache.get(key);if(visiting.has(key))error('#CIRC!');
      const raw=sheet.cells[ref]?.raw??'';let value=raw;
      if(typeof raw==='string'&&raw.startsWith('=')) {visiting.add(key);try{value=run(parse(raw.slice(1)),sheet);}finally{visiting.delete(key);}}
      else if(typeof raw==='string'&&raw.startsWith("'"))value=raw.slice(1);
      else if(raw!==''&&!isNaN(Number(raw)))value=Number(raw);
      else if(typeof raw==='string'&&/^-?\d+(\.\d+)?%$/.test(raw))value=parseFloat(raw)/100;
      cache.set(key,value);return value;
    }
    const number=v=>{if(v===''||v===false)return 0;if(v===true)return 1;const n=Number(v);if(!Number.isFinite(n))error('#VALUE!');return n;};
    function run(n,sheet) {
      if(n.type==='value')return n.value;
      if(n.sheet){sheet=workbook.sheets.find(s=>s.name.toLowerCase()===n.sheet.toLowerCase());if(!sheet)error('#REF!');}
      if(n.type==='ref')return cell(sheet,n.ref);
      if(n.type==='range'){const [r1,c1]=coord(n.start),[r2,c2]=coord(n.end);if(r1<0||r2<0||c1<0||c2<0||r1>=120||r2>=120||c1>=26||c2>=26)error('#REF!');const rows=[];for(let r=Math.min(r1,r2);r<=Math.max(r1,r2);r++){const row=[];for(let c=Math.min(c1,c2);c<=Math.max(c1,c2);c++)row.push(cell(sheet,address(r,c)));rows.push(row);}return rows;}
      if(n.type==='unary')return (n.op==='-'?-1:1)*number(run(n.value,sheet));
      if(n.type==='binary') {
        let a=run(n.left,sheet),b=run(n.right,sheet);
        if(n.op==='&')return String(a)+String(b);
        if(['=','<>','<','>','<=','>='].includes(n.op)){if(typeof a==='string')a=a.toLowerCase();if(typeof b==='string')b=b.toLowerCase();return ({'=':()=>a===b,'<>':()=>a!==b,'<':()=>a<b,'>':()=>a>b,'<=':()=>a<=b,'>=':()=>a>=b})[n.op]();}
        a=number(a);b=number(b);if(n.op==='/'&&b===0)error('#DIV/0!');
        const v=({'+':()=>a+b,'-':()=>a-b,'*':()=>a*b,'/':()=>a/b,'^':()=>a**b})[n.op]();if(!Number.isFinite(v))error('#NUM!');return v;
      }
      if(n.type==='call') {
        if(n.name==='IF'){if(n.args.length<2)error('#VALUE!');return run(n.args[0],sheet)?run(n.args[1],sheet):(n.args[2]?run(n.args[2],sheet):false);}
        if(n.name==='IFERROR'){try{return run(n.args[0],sheet);}catch{return run(n.args[1],sheet);}}
        const args=n.args.map(a=>run(a,sheet));
        if(n.name==='XLOOKUP') {const [key,lookup,results,fallback='#N/A']=args,values=[lookup].flat(Infinity),out=[results].flat(Infinity);if(values.length!==out.length)error('#VALUE!');if((args.length>4&&args[4]!==0)||(args.length>5&&args[5]!==1))error('#N/A');const i=values.findIndex(v=>String(v).toLowerCase()===String(key).toLowerCase());if(i<0){if(fallback==='#N/A')error('#N/A');return fallback;}return out[i];}
        const fn=FormulaFunctions[n.name];if(typeof fn!=='function')error('#NAME?');
        let result=fn(...args);if(result instanceof Error)error(result.message);if(result instanceof Date)result=(Date.UTC(result.getFullYear(),result.getMonth(),result.getDate(),result.getHours(),result.getMinutes(),result.getSeconds())-Date.UTC(1899,11,30))/86400000;
        if(Array.isArray(result)){if(result.flat(Infinity).length===1)return result.flat(Infinity)[0];error('#SPILL!');}return result;
      }
    }
    return {get(sheet,ref){try{return cell(sheet,ref);}catch(e){return /^#/.test(e.message)?e.message:'#VALUE!';}}};
  }
  function shift(formula,dr,dc=0){return formula.split(/("(?:[^"]|"")*"|'(?:[^']|'')*')/g).map((part,i)=>i%2?part:part.replace(/(?<![A-Z0-9_])(\$?)([A-Z]+)(\$?)(\d+)(?![A-Z0-9_!(])/gi,(m,ac,c,ar,r)=>{const [rr,cc]=coord(c+r);return rr+(ar?0:dr)<0||cc+(ac?0:dc)<0?'#REF!':ac+col(cc+(ac?0:dc))+ar+(rr+(ar?0:dr)+1);})).join('');}
  function csvParse(text){const rows=[[]];let value='',quote=false;for(let i=0;i<text.length;i++){const c=text[i];if(c==='"'){if(quote&&text[i+1]==='"'){value+='"';i++;}else quote=!quote;}else if(!quote&&(c===','||c==='\n')){rows.at(-1).push(value.replace(/\r$/,''));value='';if(c==='\n')rows.push([]);}else value+=c;}if(quote)throw Error('Unclosed CSV quote.');rows.at(-1).push(value.replace(/\r$/,''));if(rows.at(-1).length===1&&rows.at(-1)[0]==='')rows.pop();return rows;}
  const csvWrite=rows=>rows.map(row=>row.map(v=>'"'+String(v??'').replace(/"/g,'""')+'"').join(',')).join('\r\n');
  return {parse,calculator,coord,col,address,shift,csvParse,csvWrite};
})();
if(typeof module!=='undefined')module.exports=SheetEngine;
