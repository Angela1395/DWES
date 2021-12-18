/*variableGlobal = "global";
var variableLocal = "local";
let variableBloque = "Bloque";
const constante = "constante";*/

const numero = 7;
for(let i = 0; i < numero; i++){
    for(let j = numero - i; j>0; j--){
        process.stdout.write("hola");
    }
    for(let j = 4; j<=i ; j++) {
        process.stdout.write("*");
    }
    console.log();
}