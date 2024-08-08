
fetch("../js/fonteDeTudo.json")
.then(response => response.json())
.then(data => {

  
  localStorage.setItem("Item", JSON.stringify(data))
  console.log("Itens Salvo")

  setTimeout(() => { 

    let legenda = document.querySelector(".pub-img").innerHTML = "";

    data.forEach(itens => {

      let ItemHTML = `<div class="MenuItem imgpub" data-id="${itens.id}">
                    <div class="logopub">
                        <h3>Decor. <span>Nadiany</span></h3>
                    </div>
                    <div class="quant-pub">
                        <h5>+16 FOTOS</h5>
                    </div>
                    <div class="description">
                        <h3 id="Elemento-Principal">${itens.description}</h3>
                    </div>
                    <img class="ImagemPub" src="${itens.img}" alt="ImagemPub">
                </div>`
      
       legenda = document.querySelector(".pub-img").innerHTML += ItemHTML;

    })

    const menuItens = document.querySelectorAll(".MenuItem")

    menuItens.forEach((item, index) => {
       item.addEventListener("click", () => {
          var id = index;
          localStorage.setItem("detalhe", id)
          window.location.href = "../pagina/detalhe.html";
       })
    })

  }, 3000)

})
