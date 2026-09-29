const certifications = [
['Vector Databases for RAG: An Introduction','IBM','Sep 2026','4MEE8VL7FT58','Generative AI','https://www.coursera.org/account/accomplishments/records/4MEE8VL7FT58'],
['Google AI','Google','May 2026','617ZG3PRTBMO','Artificial Intelligence','https://www.coursera.org/account/accomplishments/specialization/617ZG3PRTBMO'],
['AI for Content Creation','Google','May 2026','KW4LR0YOZPGJ','Artificial Intelligence','https://www.coursera.org/account/accomplishments/records/KW4LR0YOZPGJ'],
['AI for Data Analysis','Google','May 2026','YHAQAN15I52I','Data & Analytics','https://www.coursera.org/account/accomplishments/records/YHAQAN15I52I'],
['AI for Writing and Communicating','Google','May 2026','FCZHO1HQ0BAO','Artificial Intelligence','https://www.coursera.org/account/accomplishments/records/FCZHO1HQ0BAO'],
['AI for Research and Insights','Google','May 2026','QEEICZHYZRJR','Artificial Intelligence','https://www.coursera.org/account/accomplishments/records/QEEICZHYZRJR'],
['AI for Brainstorming and Planning','Google','May 2026','9WVGK3BQF05D','Artificial Intelligence','https://www.coursera.org/account/accomplishments/records/9WVGK3BQF05D'],
['AI Fundamentals','Google','Apr 2026','STHUIQFRJGLC','Artificial Intelligence','https://www.coursera.org/account/accomplishments/records/STHUIQFRJGLC'],
['Build RAG Applications: Get Started','IBM','Mar 2026','8TFSFGLTF5U4','Generative AI','https://www.coursera.org/account/accomplishments/records/8TFSFGLTF5U4'],
['Develop Generative AI Applications: Get Started','IBM','Jan 2026','UMK9IPTQUZYM','Generative AI','https://www.coursera.org/account/accomplishments/records/UMK9IPTQUZYM'],
['Windows Server Management and Security','Coursera','Oct 2018','Y4KCX6JLGDQS','Enterprise & Systems','https://www.coursera.org/account/accomplishments/verify/Y4KCX6JLGDQS'],
['Getting and Cleaning Data','Coursera','Aug 2018','6UG9TY7D89W2','Data & Analytics','https://www.coursera.org/account/accomplishments/verify/6UG9TY7D89W2'],
['Introduction to Cyber Attacks','Coursera','—','ZKNJ6QJZ4HUH','Cybersecurity','https://www.coursera.org/account/accomplishments/verify/ZKNJ6QJZ4HUH'],
['Data Science for Business - Level 1','IBM','—','6bb1917a-6d6a-4561-8381-bf92e8697b69','Data & Analytics','https://www.youracclaim.com/badges/6bb1917a-6d6a-4561-8381-bf92e8697b69/linked_in_profile'],
['The Data Scientist’s Toolbox','Coursera','—','QD39W59RVSFN','Data & Analytics','https://www.coursera.org/account/accomplishments/verify/QD39W59RVSFN'],
['Data Science Foundations','IBM','—','33216b66-25f1-4b2d-9cc2-8fdcd166115b','Data & Analytics','https://www.youracclaim.com/badges/33216b66-25f1-4b2d-9cc2-8fdcd166115b/linked_in_profile'],
['Big Data Foundations','IBM','—','25be3dc7-8547-4841-8382-5e4b17a212c4','Big Data','https://www.youracclaim.com/badges/25be3dc7-8547-4841-8382-5e4b17a212c4/linked_in_profile'],
['R Programming','Big Data University','—','','Data & Analytics',''],
['Machine Learning','Big Data University','—','','Machine Learning',''],
['Data Science Methodology','Big Data University','—','','Data & Analytics',''],
['Data Science','Big Data University','—','','Data & Analytics',''],
['Big Data','Big Data University','—','','Big Data','']
];
const esc = v => String(v ?? '').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const grid=document.getElementById('cert-grid'), filters=document.getElementById('filters'), count=document.getElementById('cert-count');
let active='All';
const cats=['All',...new Set(certifications.map(x=>x[4]))];
filters.innerHTML=cats.map(c=>`<button type="button" class="filter ${c==='All'?'active':''}" data-c="${esc(c)}">${esc(c)}</button>`).join('');
function render(){
 const list=active==='All'?certifications:certifications.filter(x=>x[4]===active);
 count.textContent=list.length;
 grid.innerHTML=list.map((x,i)=>`<article class="cert-card"><div class="cert-top"><span class="cert-index">${String(i+1).padStart(2,'0')}</span><span class="cert-category">${esc(x[4])}</span></div><div class="issuer-row"><div class="issuer-mark">${esc(x[1]).slice(0,2).toUpperCase()}</div><div><strong>${esc(x[1])}</strong><span>${esc(x[2])}</span></div></div><h3>${esc(x[0])}</h3>${x[3]?`<p class="credential">Credential ID <code>${esc(x[3])}</code></p>`:''}<div class="cert-bottom">${x[5]?`<a href="${esc(x[5])}" target="_blank" rel="noopener">Verify credential ↗</a>`:'<span>Professional learning</span>'}</div></article>`).join('');
}
filters.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;filters.querySelectorAll('button').forEach(x=>x.classList.remove('active'));b.classList.add('active');active=b.dataset.c;render()});
render();
