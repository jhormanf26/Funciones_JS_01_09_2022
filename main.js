

let imagen="imagenes/Cilindro.png";
let a = Number(prompt(`Ingrese el radio de la base del Cilindro`,1));
let b = Number(prompt(`Ingrese el alto del Cilindro`,1));

function volumenCilindro(radio,alto){
    return Math.PI*radio*radio*alto;
}

function imprimir(titulo , texto){
    console.group(titulo);
        console.log(texto)
    console.groupEnd();
}
imprimir(`El Volumen  del Cilindro :`,`${volumenCilindro(a,b)}`);
document.body.insertAdjacentHTML("afterbegin",`<img src="${imagen}">`);