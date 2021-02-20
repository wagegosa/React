// arreglos
const arreglo = [1,2,3,4];

// se utiliza el operado spread para exctraer los datos de un arreglo
let arreglo2 = [ ...arreglo, 5];
const arreglo3 = arreglo2.map(function (number) {
    return 3 * number;
});

console.log( arreglo );
console.log( arreglo2);
console.log( arreglo3);