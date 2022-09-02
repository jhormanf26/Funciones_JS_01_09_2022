

let imagen="imagenes/Poligono.png";
let a = Number(prompt(`Ingrese el numero de lados  del Poligono`,1));
let b = Number(prompt(`Ingrese el lado del Poligono`,1));
let c = Number(prompt(`Ingrese el apotema del Poligono`,1));


function areaPoligono(numeroLados ,lado,apotema){
    return ((numeroLados*lado*apotema)/2);
}

function imprimir(titulo , texto){
    console.group(titulo);
        console.log(texto)
    console.groupEnd();
}
imprimir(`El area del Poligono Regular:`,`${areaPoligono(a,b,c)}`);
document.body.insertAdjacentHTML("afterbegin",`<img src="${imagen}">`);