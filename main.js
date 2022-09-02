

let imagen="imagenes/Circulo.png";
let a = Number(prompt(`Ingrese radio  del Circulo`,1));


function areaCirculo(radio){
    return Math.PI*radio*radio;
}

function imprimir(titulo , texto){
    console.group(titulo);
        console.log(texto)
    console.groupEnd();
}
imprimir(`El area del Circulo :`,`${areaCirculo(a)}`);
document.body.insertAdjacentHTML("afterbegin",`<img src="${imagen}">`);