function Nota(){
    const n1 = Math.random();

    const nota = n1 * 101;

    const notafinal = Math.floor(nota);
    
    return notafinal;
}

const nota = Nota();
var colors = require('colors');


if (nota >= 81){
    console.log("Su nota es" + " " + nota.toString().green);
} else if (nota >=66){
    console.log("Su nota es" + " " + nota.toString().yellow);
} else {
    console.log("Su nota es" + " " + nota.toString().red);
}




//function sumar(n1, n2, color){
//    const resultado = n1 + n2

//    console.log(resultado.toString()[color])
//}

//sumar(5, 2,"green")
//sumar(2, 1,"red")
//sumar(70, 242, "rainbow")
//Crear una aplicacion que permita mostrar colores segun la nota
//<65 rojo, entre 66 y 80 amarillo, 81 a 100 verde


//console.log("Inicio de aplicacion en modo de desarrollo".red)
 
//console.log('hello'.green); // outputs green text
//console.log('i like cake and pies'.underline.red) // outputs red underlined text
//console.log('inverse the color'.inverse); // inverses the color
//console.log('OMG Rainbows!'.rainbow); // rainbow
//console.log('Run the trap'.trap); // Drops the bass
