function hacerCuenta(objeto){
    return objeto.bien - objeto.mal;
}


const datos = {
    bien: 10,
    mal: 5
};

const resultado = hacerCuenta(datos);

console.log(resultado);