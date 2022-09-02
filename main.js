

let imagen="imagenes/Trapecio.png";
let a = Number(prompt(`Ingrese la base mayor del Trapecio`,1));
let b = Number(prompt(`Ingrese la base menor del Trapecio`,1));
let c = Number(prompt(`Ingrese la altura del Trapecio`,1));


function areaTrapecio(baseMenor ,baseMayor,altura){
    return ((baseMayor+baseMenor)/2)*altura;
}

function imprimir(titulo , texto){
    console.group(titulo);
        console.log(texto)
    console.groupEnd();
}
imprimir(`El area del Trapecio :`,`${areaTrapecio(b,a,c)}`);
document.body.insertAdjacentHTML("afterbegin",`<img src="${imagen}">`);