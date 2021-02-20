const persona = {
    nombre: "Bruce",
    apellido: "Wayne",
    edad: 38,
    dirreccion: {
        ciudad: "Gotica",
        zip: 665165615,
        lat: 12.2165161,
        lng: 24.4848988
    }

};
console.table( persona);

// para clonar un Objecto simplemente agregamos "..." segido de el objeto a clonar
const persona2 = { ...persona };
persona2.nombre = "Damian";

console.log( persona );
console.log( persona2);