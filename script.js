const botaoTema=document.querySelector("#botao-tema");
const botaoMenu=document.querySelector("#botao-menu");
const linksMenu=document.querySelector("#links-menu");
const botoesFiltro=document.querySelectorAll(".filtro");
const cards=document.querySelectorAll(".card-projeto");
if(localStorage.getItem("tema")==="claro")document.body.classList.add("tema-claro");
function atualizarIconeTema(){botaoTema.textContent=document.body.classList.contains("tema-claro")?"🌙":"☀️"}
atualizarIconeTema();
botaoTema.addEventListener("click",()=>{document.body.classList.toggle("tema-claro");localStorage.setItem("tema",document.body.classList.contains("tema-claro")?"claro":"escuro");atualizarIconeTema()});
botaoMenu.addEventListener("click",()=>{const aberto=linksMenu.classList.toggle("aberto");botaoMenu.setAttribute("aria-expanded",String(aberto));botaoMenu.setAttribute("aria-label",aberto?"Fechar menu":"Abrir menu")});
linksMenu.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>{linksMenu.classList.remove("aberto");botaoMenu.setAttribute("aria-expanded","false")}));
botoesFiltro.forEach(botao=>botao.addEventListener("click",()=>{const categoria=botao.dataset.filtro;botoesFiltro.forEach(item=>{const ativo=item===botao;item.classList.toggle("ativo",ativo);item.setAttribute("aria-pressed",String(ativo))});cards.forEach(card=>card.hidden=categoria!=="todos"&&card.dataset.categoria!==categoria)}));
document.querySelector("#ano-atual").textContent=new Date().getFullYear();