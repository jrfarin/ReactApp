
// Clásica Declarativa
const saludar = function( nombre ){
    return `Hola, ${ nombre }`;
}

const saludar2 = ( nombre ) => {
    return `Hola, ${ nombre } `;
}

// forma simplificada para una sola linea de código (con argumento)
const saludar3 = ( nombre ) => `Hola, ${ nombre } `;

// forma simplificada para una sola linea de código (con argumento)
const saludar4 = ( ) => `Hola, mundo`;


console.log( saludar('Pep'));
console.log( saludar2('José Ramón'));
console.log( saludar3('Lena'));
console.log( saludar4());


const getUser = () => {
    return {
        uid: '123ABC',
        username: 'RinTinTin'
    }
};

// Return an Object (simplify)
const getUser2 = () => ({
    uid: 'kljdghkl',
    username: 'TonTin'
});

const user = getUser();

console.log( user );
console.log( getUser2() );



// To Do Task *******************
// 1. Transform to Arrow Function
// 2. Return an Implicit Object
// 3. Testing

//FROM
function getActiveUser( name ) {
    return {
        uid: 'activoTela',
        username: 'Lena Activa'
    }
};
// TO
const getActiveUser2 = ( name ) => ({ 
    uid: 'activoTela',
    username: 'Lena Activa'
})

const activeUser = getActiveUser('Lena');
console.log(activeUser);

const activeUser2 = getActiveUser2('María');
console.log(activeUser2);