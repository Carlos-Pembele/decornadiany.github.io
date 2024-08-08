
let count = 1;

document.getElementById("radio1").checked = true;

setInterval( ()=>{
    TrocaDeImagem()
}, 8000)

function TrocaDeImagem(){
    count ++;

    if(count > 3){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;
}


function detalhe(){
    window.location.href = "../pagina/detalhe.html"
}

function detalhe2(){
  window.location.href = "../pagina/description.html"
}

function Cadastrar(){
    window.location.href = "../pagina/cadastrar.html"
}

function Seting(){
    setg = document.querySelector(".linkes");
    fechar = document.querySelector(".close");

    setg.style.height = '200px'
    fechar.style.display = 'flex'
}

function FecharSeting(){
    setg = document.querySelector(".linkes");
    fechar = document.querySelector(".close");

    setg.style.height = '0px'
    fechar.style.display = 'none' 
}


function Compra(){

    let EspacoPagamento = document.querySelector(".EspacoPagamento").innerHTML = "";
  
    let OperacaoCompra = `
            <div class="pagamentoBody">
        <div class="FundoPagamento container">
  
          <div class="pagamento">
  
            <h4 class="TituloPagamento"> Informações Pessoais </h4>
        
            <input type="text" id="nomeComprador" class="InputPagamento" placeholder="Nome do Cliente">
            
            <input type="text" id="TelefoneComprador" class="InputPagamento" placeholder="Número Telefónico">

            <input type="text" id="EmailComprador" class="InputPagamento" placeholder="E-mail do Cliente">
  
        <h4 class="TituloPagamento" style="padding-top: 10px;">Informação da Decoração</h4>
    
          <input type="text" name="" id="NumeroCartão" class="InputPagamento" placeholder="Tipo de Decoração">
          <input type="text" id="LocalComprador" class="InputPagamento" placeholder="Localização da actividade">
          <input type="date" class="InputPagamento1">

          <div class="cardInformation">
            <input type="text" placeholder="Largura" class="InputPagamento sm">
            <input type="text" placeholder="Comprimento" class="InputPagamento sm">
            <input type="text" placeholder="Hora Inicial" class="InputPagamento sm">
          </div>
  
        <button class="comprar bg-warning text-white" onclick="RealizarCompra()">Reservar</button>
        <span class="Fechar" onclick="FecharPagamento()">X</span>
      </div>
    </div>
  </div>
    `;
  
    EspacoPagamento = document.querySelector(".EspacoPagamento").innerHTML = OperacaoCompra;
  
  }
  

  
function FecharPagamento(){

    let EspacoPagamento = document.querySelector(".EspacoPagamento").innerHTML = "";
  
  }
  