const h1 = document.querySelector('h1');
const c1 = document.querySelector('#calculo1');
const c2 = document.querySelector('#calculo2');
const button = document.querySelector("#btnCalcular");
const resultado = document.querySelector('#resultado');
const form = document.querySelector('#form');

form.addEventListener('click', sumarValores);

function sumarValores() {
    //event.preventDefault();
    const suma = parseFloat(c1.value) + parseFloat(c2.value);
    resultado.innerText = "Resultado " + suma;
}