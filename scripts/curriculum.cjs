const fs=require('node:fs');
const {run}=require('../tests/helpers.cjs')();
const data=JSON.parse(run('JSON.stringify({tracks:Curriculum,projects:Projects,exercises:Exercises})'));
const safe=v=>String(v??'—').replaceAll('|',' / ').replaceAll('\n',' ');
let out='# Curriculum map\n\nCanonical index of shipped lesson IDs, prerequisites, delivery mode and project connections. Generated from the runtime content with `node scripts/curriculum.cjs`; edit source records, then regenerate. “Available” means authored and accessible, not independently certified mastery. Advanced Excel follow-alongs are not browser simulations.\n\n24 modern learning tracks are followed by the preserved original course. Professional Projects forms the applied capstone area with 32 case studies. The 250 lessons include 20 legacy entries retained for saved progress. Some legacy topics overlap modern explanations intentionally; IDs remain stable.\n\n';
for(const t of data.tracks){
 out+=`## ${safe(t.title)}\n\nTrack ID: \`${t.id}\`. Prerequisite: ${safe(t.prerequisite||'Start here / prior course level')}.\n\n| Module | Lesson (stable ID) | Difficulty | Practice | Project connection | Status |\n|---|---|---|---|---|---|\n`;
 for(const l of t.lessons){const ex=data.exercises.find(e=>e.id===l.exercise);const project=ex?data.projects.find(p=>p.dataset===ex.dataset):null;out+=`| ${l.id.startsWith('lesson-ex')?'Applied practice':t.modern?'Concepts':'Original course'} | ${safe(l.title)} — \`${l.id}\` | ${safe(l.difficulty||t.difficulty||'Progressive')} | ${l.exercise?'`'+l.exercise+'`':l.desktop?'Excel follow-along':'Lesson task and checkpoint'} | ${project?safe(project.title)+' (`'+project.id+'`)':'Choose a relevant capstone'} | Available${l.desktop?' · requires Excel':''} |\n`;}
 out+='\n';
}
out+='## Professional Projects\n\n| ID | Case study | Dataset |\n|---|---|---|\n'+data.projects.map(p=>`| ${p.id} | ${safe(p.title)} | ${p.dataset} |`).join('\n')+'\n';
fs.writeFileSync('docs/CURRICULUM.md',out);
console.log(`Indexed ${data.tracks.reduce((n,t)=>n+t.lessons.length,0)} lessons and ${data.projects.length} projects.`);
