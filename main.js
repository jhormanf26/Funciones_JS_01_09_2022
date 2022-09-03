

let imagen="imagenes/Ortoedro.png";
let a = Number(prompt(`Ingrese el largo del Ortoedro`,1));
let b = Number(prompt(`Ingrese el ancho del Ortoedro`,1));
let c = Number(prompt(`Ingrese el alto del Ortoedro`,1));

function volumenOrtoedro(largo,ancho,alto){
    return largo*ancho*alto;
}

function imprimir(titulo , texto){
    console.group(titulo);
        console.log(texto)
    console.groupEnd();
}
imprimir(`El Volumen  del Ortoedro :`,`${volumenOrtoedro(a,b,c)}`);
document.body.insertAdjacentHTML("afterbegin",`<img src="${imagen}">`);