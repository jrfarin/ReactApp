const persona = {
    nombre: 'Pep',
    apellido: 'Farin',
    edad: 45,
}

// Operador SPREAD => Clonar Objetos
const persona2 = { ...persona }
persona2.nombre = 'José Ramón'

console.log(persona);
console.log(persona2);
