//funciones

//asi no es recomendable
// function saludar (nombre){
//     return `HOla, ${nombre}`;
// }

//correcta
const saludar = function(nombre){
    return `HOla, ${nombre}`;
}


//de flecha
const saludar2 = (nombre) =>{
    return `HOla, ${nombre}`;
}

const saludar3 = (nombre) => `HOla, ${nombre}`;


//TAREA

const getUsuarioActivo = (nombre) =>
    ( {
        uid: 'ABC567',
        username: nombre
    })

const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);

//console.log(saludar3('Fernando'));