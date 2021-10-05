const operaciones = {
    suma: (a,b) => a+b,
    resta: (a,b) => a-b,
    multiplicacion: (a,b) => a*b,
    dicision: (a,b) => a/b,
};

const key = 'resto';
console.log(operaciones[key](7,3));