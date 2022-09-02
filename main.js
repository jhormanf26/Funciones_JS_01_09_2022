

let imagen="imagenes/Cubo.png";
let a = Number(prompt(`Ingrese la arista del Cubo`,1));


function volumenCubo(arista){
    return arista*arista*arista;
}

function imprimir(titulo , texto){
    console.group(titulo);
        console.log(texto)
    console.groupEnd();
}
imprimir(`El Volumen  del Cubo :`,`${volumenCubo(a)}`);
document.body.insertAdjacentHTML("afterbegin",`<img src="${imagen}">`);