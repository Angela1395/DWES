function menordieciocho(elemento) {
    return elemento >= 18;
  }
  var filtrados = [11, 7, 18, 100, 04, 34, 15, 67].filter(menordieciocho);
  
  console.log(filtrados);