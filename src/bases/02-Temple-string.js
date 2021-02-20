const nombre = 'Walter';
const apellido = 'González';

// const nombreCompleto = nombre + " " + apellido;
// const nombreCompleto = ` Hola mundo `;
const nombreCompletoDos = `${ nombre } ${ apellido }`;
// console.log(nombreCompleto);
console.log(nombreCompletoDos);

function getSaludo(nombre) {
    return 'Hola ' + nombre
}

console.log(`Este es un texto: ${getSaludo(nombreCompletoDos)});