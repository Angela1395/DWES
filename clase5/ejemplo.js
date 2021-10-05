const operaciones = {
    suma: (a,b) => a+b,
    resta: (a,b) => a-b,
    multiplicacion: (a,b) => a*b,
    dicision: (a,b) => a/b,
};

//extraer las keys de las operaciones
console.log(object.keys(operaciones));
const key = object.keys(operaciones)[Math.floor(Math.random()*object.keys(operaciones.lenght))];
console.log(operaciones[key](7,3));

//coger los valores de las operaciones de suma, resta, mult, div








//ejemplo dos
const persona = {
    nombre: 'angela',
    apellido: 'guerado',
    edad: 25,
    nombreCompleto: () => {
//function (){//
        return `${this.nombre} ${this.apellidos}`;
    }
};
persona.nombreCompleto.bind(persona);
console.log(persona.nombreCompleto());
