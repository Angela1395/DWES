function sleep(ms){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('resolve');
        }, ms);
    });
}
async function init(){
    console.log('Hola :)');
    await sleep(1000);
    console.log('ahora piensa en un numero del 1 al 10');
    await sleep(3000);
    console.log('Ahora multiplicalo por 9 :P');
    await sleep(5000);
    console.log('Por favor suma las cifras');
    await sleep(3000);
    console.log('vas a restarle 5 :)');
    await sleep(3000);
    console.log('espera..... Estoy intentando adivinarlo');
    await sleep(5000);
    console.log('Es el 4!!! olé los caracoles');
}
init();