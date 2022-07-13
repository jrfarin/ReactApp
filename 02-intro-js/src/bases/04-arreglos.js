

const arreglo = [1,2,3,4];
// No usar push para insertar valores
//arreglo.push(1);

// Spread Operator for Array
let arreglo2 = [ ...arreglo, 5];

// Array Map (nuevo array)
const arreglo3 = arreglo2.map( function(numero) {
    return numero * 2;
});


console.log( arreglo );
console.log( arreglo2 );
console.log( arreglo3 );
