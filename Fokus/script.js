const html = document.querySelector("html")
const btFoco = document.querySelector(".app__card-button--foco")
const btCurto = document.querySelector(".app__card-button--curto")


btFoco.addEventListener('click', () => {
    console.log("botão foco clicado")
    html.setAttribute("data-contexto", "foco")
})


btCurto.addEventListener('click', () => {
    console.log("botão curto clicado")
    html.setAttribute("data-contexto", "descanso-curto")
})

const meuBotao = document.getElementById("start-pause");
meuBotao.addEventListener("click", function() {
  alert("O botão foi clicado!");
  console.log("botão comecar clicado")
}); 

