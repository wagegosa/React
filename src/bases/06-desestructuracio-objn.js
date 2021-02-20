// Destructuración 
// Asignacción Desestructuración
const persona = {
    nombre: 'Tonny',
    edad: 47,
    clave: 'IroMan'
}

// const {edad, clave, nombre} = persona;
// console.log("El nombre de "+clave+" es: "+nombre+" y tiene una edad de: "+edad);

const useContext = ({clave, nombre, edad, rango = 'Capitán'}) =>{
    // console.log(nombre,  edad, rango);
    return{
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.421,
            lng: -123232
        }
    }
}
const {nombreClave, anios, latlng:{lat, lng}} = useContext(persona);
console.log(nombreClave, anios);
console.log(lat, lng);