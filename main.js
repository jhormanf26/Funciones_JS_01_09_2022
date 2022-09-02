
let imagen="imagenes/Cuadrado.png";
let a = Number(prompt(`Ingrese el lado del cuadrado`,1));

function areaCuadrado(lado){
    return lado;
}

console.log(`El area del cuadrado es: ${areaCuadrado(a)}`);
document.body.insertAdjacentHTML("afterbegin",`<img src="${imagen}">`);