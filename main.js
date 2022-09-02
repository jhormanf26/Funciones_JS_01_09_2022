

let imagen="imagenes/Triangulo.png";
let a = Number(prompt(`Ingrese la base del Triangulo`,1));
let b = Number(prompt(`Ingrese la altura del Triangulo`,1));

function areaTriangulo(base , altura){
    return (base*altura)/2;
}

function imprimir(titulo , texto){
    console.group(titulo);
        console.log(texto)
    console.groupEnd();
}
imprimir(`El area del Triangulo :`,`${areaTriangulo(a,b)}`);
document.body.insertAdjacentHTML("afterbegin",`<img src="${imagen}">`);