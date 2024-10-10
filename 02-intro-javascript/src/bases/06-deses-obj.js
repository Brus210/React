//destructuracion de objetos
//asignacion desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    rango: 'Soldado'
}

// const {nombre,edad, clave} = persona;
// console.log(nombre);
// console.log(edad);
// console.log(clave);

const usAlgo = ({nombre, edad, clave, rango}) => {
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }
}
const avenger = usAlgo (persona);
const {nombreClave, anios, latlng:{lat, lng}} = avenger;
console.log(nombreClave, anios, lat, lng);


//esto se hace normalmente
// console.log(persona.nombre);
// console.log(persona.clave);