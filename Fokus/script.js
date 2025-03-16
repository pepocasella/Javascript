// Variáveis

// 1. Elementos
const html = document.querySelector("html")
const displayTempo = document.querySelector('#timer');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title')

// 2. Botões
const botaoIniciar = document.querySelector('.app__card-primary-button');
const btFoco = document.querySelector(".app__card-button--foco")
const btCurto = document.querySelector(".app__card-button--curto")
const btLongo = document.querySelector(".app__card-button--longo")

// 3. Contextos
const duracaoFoco = 1500; 
const duracaoDescansoCurto = 300; 
const duracaoDescansoLongo = 900; 


// Evento click = FOCO
btFoco.addEventListener('click', () => {
    alterarContexto('foco')
    btFoco.classList.add("active");
    btCurto.classList.remove("active");
    btLongo.classList.remove("active");
})

// Evento click = DESCANSO CURTO
btCurto.addEventListener('click', () => {
    alterarContexto('descanso-curto')
    btCurto.classList.add("active");
    btFoco.classList.remove("active");
    btLongo.classList.remove("active");

})

// Evento click = DESCANDO LONGO
btLongo.addEventListener('click', () => {
  alterarContexto('descanso-longo')
  btLongo.classList.add("active");
  btFoco.classList.remove("active");
  btCurto.classList.remove("active");
})

// Evento click = Star and Pausa
const meuBotao = document.getElementById("start-pause");
meuBotao.addEventListener("click", function() {
  alert("O botão foi clicado!");
  console.log("botão comecar clicado")
}); 


function alterarContexto(contexto) {
  console.log(`botão ${contexto} clicado`)
  html.setAttribute("data-contexto", contexto)
  banner.setAttribute("src", `/imagens/${contexto}.png`)
  switch (contexto) {
    case "foco":
      titulo.innerHTML = `Otimize sua produtividade, <br> 
      <strong class="app__title-strong">mergulhe no que importa.</strong>
      `
      break;
    case "descanso-curto":
      titulo.innerHTML = `Que tal dar uma respirada, <br> 
      <strong class="app__title-strong">mergulhe no que importa.</strong>
      `
      break;
    case "descanso-longo":
      titulo.innerHTML = `Hora de voltar à superfície, <br> 
      <strong class="app__title-strong">mergulhe no que importa.</strong>
      `
      break;
    default
      break;
    }
}