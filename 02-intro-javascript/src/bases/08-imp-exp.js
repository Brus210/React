import heroes from '../data/heroes.js';

export const getHeroeById = (id) =>{
    return heroes.find((heroe) => heroe.id === id);
}

//console.log(geHeroeById(1)); // {id: 2, name: 'Spiderman', owner: 'Marvel'}


export const getHeroeByOwner = (owner) =>{
    return heroes.filter((heroe) => heroe.owner === owner);
}

//console.log(getHeroeByOwner('Marvel')); 


//exportaciones e importaciones
