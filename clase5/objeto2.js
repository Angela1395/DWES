function dimendionescubo(resultado){
    return resultado.ancho * resultado.largo * resultado.alto;
}
const dimensiones = {
    ancho: 20,
    alto: 40,
    largo: 13,
}
const cuenta = dimendionescubo(dimensiones);
console.log(cuenta);