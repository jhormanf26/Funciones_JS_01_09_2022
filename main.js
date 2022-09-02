

let imagen="imagenes/Cono.png";
let a = Number(prompt(`Ingrese el radio  del Cono`,1));
let b = Number(prompt(`Ingrese la generatriz  del Cono`,1));


function areaCono(radio,generatriz){
    return Math.PI*radio*generatriz;
}

function imprimir(titulo , texto){
    console.group(titulo);
        console.log(texto)
    console.groupEnd();
}
imprimir(`El area lateral del Cono :`,`${areaCono(a,b)}`);
document.body.insertAdjacentHTML("afterbegin",`<img src="${imagen}">`);