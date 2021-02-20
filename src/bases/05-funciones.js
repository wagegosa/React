// funciones
const saludar = function (nombre) {
    return `Hola, ${nombre}`;
}
// funcion flecha
const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}
const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola Mundo`;
console.log(saludar("Mundo"));
console.log(saludar2("Vegeta"));
console.log(saludar3("Goku"));
console.log(saludar4());

const getUser = () => {
    return {
        uid: 'ABC123',
        userName: 'El_papi1502'
    }
}

const user = getUser;
console.log(user);

// Tarea
// 1. Transformar  la función en una función de flechas
// 2. Tiene que retornar un objeto implicito
// 3. pruebas 
// function getUsarioActivo(nombre) {
//     return{
//         uid: "ABC567",
//         userName: nombre
//     }
// }
const getUsarioActivo = (nombre) => ({
        uid: "ABC567",
        userName: nombre
});

const usuarioActivo = getUsarioActivo('Fernando');
console.log(usuarioActivo);