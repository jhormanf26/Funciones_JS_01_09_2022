

let imagen="imagenes/Rombo.png";
let a = Number(prompt(`Ingrese la diagonal mayor del Rombo`,1));
let b = Number(prompt(`Ingrese la diagonal menor del Rombo`,1));

function areaRombo(diagonalMenor ,diagonalMayor){
    return (diagonalMayor*diagonalMenor)/2;
}

function imprimir(titulo , texto){
    console.group(titulo);
        console.log(texto)
    console.groupEnd();
}
imprimir(`El area del Rombo :`,`${areaRombo(b,a)}`);
document.body.insertAdjacentHTML("afterbegin",`<img src="${imagen}">`);