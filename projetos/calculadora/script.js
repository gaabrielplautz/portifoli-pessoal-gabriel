const n1 = document.querySelector("#numero1");
const n2 = document.querySelector("#numero2");
const operador = document.querySelector("#seletor");
let resultado = document.querySelector("#resultado");

operador.addEventListener("change", calcular);
n1.addEventListener("keyup",calcular);
n2.addEventListener("keyup",calcular);
function calcular(){
    if(n1.value!='' && n2.value!=''){
        const valor1 =  parseInt(n1.value);
        const valor2 =parseInt(n2.value);
        const operacao = operador.value;
        if(operacao==="Somar")
            resultado.innerHTML = valor1 + valor2;
        if(operacao==="Subtrair")
            resultado.innerHTML = valor1 - valor2;
        if(operacao==="Multiplicar")
            resultado.innerHTML = valor1 * valor2;
        if(operacao==="Dividir")
            resultado.innerHTML = valor1 / valor2;
    }
    };