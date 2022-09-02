

let imagen="imagenes/Rectangulo.png";
let a = Number(prompt(`Ingrese la base del Rectangulo`,1));
let b = Number(prompt(`Ingrese la altura del Rectangulo`,1));

function areaRectangulo(base , altura){
    return base*altura;
}

function imprimir(titulo , texto){
    console.group(titulo);
        console.log(texto)
    console.groupEnd();
}
imprimir(`El area del Rectangulo :`,`${areaRectangulo(a,b)}`);
document.body.insertAdjacentHTML("afterbegin",`<img src="${imagen}">`);