const grid=document.getElementById("cert-grid");
const filters=document.querySelectorAll(".filter");
const menu=document.querySelector(".menu-toggle");
const nav=document.querySelector(".nav-links");

function category(c){
  const s=(c.title+" "+c.issuer).toLowerCase();
  if(s.includes("ai")||s.includes("rag")||s.includes("generative")) return "AI";
  if(s.includes("data")||s.includes("big data")||s.includes("machine learning")||s.includes("r programming")) return "Data";
  return "Systems";
}
async function render(filter="all"){
  const res=await fetch("assets/certifications.json");
  const certs=await res.json();
  grid.innerHTML=certs.filter(c=>filter==="all"||category(c)===filter).map(c=>`
    <article class="cert">
      <span class="issuer">${c.issuer}</span>
      <h3>${c.title}</h3>
      <div class="meta">${c.issued==="—"?"Credential listed on LinkedIn":`Issued ${c.issued}`}</div>
      ${c.credential?`<div class="credential">Credential · ${c.credential}</div>`:""}
    </article>`).join("");
}
filters.forEach(btn=>btn.addEventListener("click",()=>{filters.forEach(b=>b.classList.remove("active"));btn.classList.add("active");render(btn.dataset.filter)}));
menu.addEventListener("click",()=>{const open=nav.classList.toggle("open");menu.setAttribute("aria-expanded",open)});
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
document.getElementById("year").textContent=new Date().getFullYear();
render();
