function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('resolve');
      }, ms);
    });
  }
  async function init() {
    console.log('Buenas tardes al juego del calamar');
    await sleep(1000);
    console.log('Piensa en un número del 1 al 10');
    await sleep(3000);
    console.log('Multiplicalo por 9');
    await sleep(5000);
    console.log('Suma sus cifras');
    await sleep(3000);
    console.log('Restale 5');
    await sleep(3000);
    console.log('Espera que lo voy adivinar');

    console.log('Espera que lo voy a adivinar');

    await sleep(5000);
    console.log('Es el 4!! o usted estará muerto ;)');
  }
  init();