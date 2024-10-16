import { heroes } from "../data/heroes";



export const getHeroesByName = (name = '') => {
    name = name.toLocaleLowerCase().trim();
    
    // Si el nombre es vacío, retornar un arreglo vacío
    if(name.length=== 0){
        return [];
    }
    return heroes.filter(hero => hero.superhero.toLocaleLowerCase().includes(name));

}