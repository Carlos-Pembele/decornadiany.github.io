let id = parseInt(localStorage.getItem("detalhe"));
let Itens = JSON.parse(localStorage.getItem("Item"));

let item = Itens.find( Item => Item.id === id);


if(item){
    console.log("Produto encontrado ",item)
    document.querySelector(".img-detail-element img").src = item.img;
    document.querySelector(".conteiudo-detail h3").innerHTML = item.title;
    document.querySelector(".precario-actual h4 strike").innerHTML = item.precoPromocional;
    document.querySelector("#PreA").innerHTML = item.precoActual;
 }
 else{
    console.log("Produto não encontrado")
 }
 
function VoltaScroll(){
   window.location.href = '../index.html'
}
 
 fetch("../js/fonteDeTudo.json")
 .then(response => response.json())
 .then(data => {
 
   
   localStorage.setItem("Item", JSON.stringify(data))
   console.log("Itens Salvados ")
 
   setTimeout(() => { 
 
     let legenda = document.querySelector(".item").innerHTML = "";
 
     data.forEach(itens => {
 
       let ItemHTML = `<img class="img-detail-pub" id="img-Foto" onclick="VoltaScroll()" src="${itens.img}" alt="">`
       
        legenda = document.querySelector(".item").innerHTML += ItemHTML;
 
     })
 
   }, 1000)
 
 })
 