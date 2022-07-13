// Template Strings

const nombre = "Pep";
const apellido = "Farin";
const nombreCompleto = nombre + " " + apellido;

const fullName = ` My name is ${nombre} {apellido}`; 

console.log( nombreCompleto );

function getSaludo(nombre) {
    return 'Hola ' + nombre;
}
console.log(` Este es un texto ${ getSaludo(nombre)} `)