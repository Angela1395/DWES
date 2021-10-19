function sleep(ms){
    return new Promise(resolve =>{
        setTimeout(()=>{
            console.log('resolve');
            resolve('resolve');
        }, ms);
    });
}
function init(){
    console.log('5');
    sleep(1000);
    console.log('4');
}
init();
console.log('3');