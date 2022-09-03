

let imagen="imagenes/Prisma.png";
let a = Number(prompt(`Ingrese el area de la base del Prisma`,1));
let b = Number(prompt(`Ingrese el alto del Prisma`,1));

function volumenPrisma(areaBase,alto){
    return areaBase*alto;
}

function imprimir(titulo , texto){
    console.group(titulo);
        console.log(texto)
    console.groupEnd();
}
imprimir(`El Volumen  del Prisma :`,`${volumenPrisma(a,b)}`);
document.body.insertAdjacentHTML("afterbegin",`<img src="${imagen}">`);