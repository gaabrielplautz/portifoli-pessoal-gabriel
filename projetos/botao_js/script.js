let botao = document.querySelector("#botao");
botao.style.background="blue";
let estaQuebrado = false;
botao.addEventListener("mouseover", e =>{
    if(estaQuebrado===false)
    botao.style.background="green"
});

botao.addEventListener("mouseout", e =>{
    if(estaQuebrado===false)
    botao.style.background="blue"
});

botao.addEventListener("click", e =>{
    botao.style.background="red"
    botao.innerHTML="Quebrei";
    estaQuebrado=true;
});


