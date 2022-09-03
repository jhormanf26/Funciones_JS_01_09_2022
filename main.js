

let imagen="imagenes/Esfera.png";
let a = Number(prompt(`Ingrese el radio de la Esfera`,1));

function volumenEsfera(radio){
    return Math.PI*radio*radio*radio*4/3;
}

function imprimir(titulo , texto){
    console.group(titulo);
        console.log(texto)
    console.groupEnd();
}
imprimir(`El Volumen  del Esfera :`,`${volumenEsfera(a)}`);
document.body.insertAdjacentHTML("afterbegin",`<img src="${imagen}">`);