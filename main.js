

let imagen="imagenes/Esfera.png";
let a = Number(prompt(`Ingrese radio  de la Esfera`,1));


function areaEsfera(radio){
    return 4*Math.PI*radio*radio;
}

function imprimir(titulo , texto){
    console.group(titulo);
        console.log(texto)
    console.groupEnd();
}
imprimir(`El area del Esfera :`,`${areaEsfera(a)}`);
document.body.insertAdjacentHTML("afterbegin",`<img src="${imagen}">`);