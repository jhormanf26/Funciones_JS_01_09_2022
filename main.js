

let imagen="imagenes/Cono.png";
let a = Number(prompt(`Ingrese el area de la base del Cono`,1));
let b = Number(prompt(`Ingrese el alto del Cono`,1));

function volumenCono(areaBase,alto){
    return (areaBase/3)*alto;
}

function imprimir(titulo , texto){
    console.group(titulo);
        console.log(texto)
    console.groupEnd();
}
imprimir(`El Volumen  del Cono :`,`${volumenCono(a,b)}`);
document.body.insertAdjacentHTML("afterbegin",`<img src="${imagen}">`);