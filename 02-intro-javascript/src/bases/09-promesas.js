import {getHeroeByOwner, geHeroeById as getHeroeById} from './bases/08-imp-exp.js';

// const promesa = new Promise( (resolve, reject) =>{ 
//     setTimeout(() =>{        
//         const heroe = getHeroeById(2);
//         resolve(heroe);
//     }, 2000)

// });


// promesa.then((heroe) => {
//     console.log('Todo bien', heroe)    
// })


const getHeroeByIdAsync = (id) =>{
    return  new Promise( (resolve, reject) =>{ 
        setTimeout(() =>{        
            const heroe = getHeroeById(id);
            if(heroe){
                resolve(heroe);
            }
            else{
                reject('No se pudo encontrar el heroe');
            }
        }, 2000)
    
    });
    
    

    
}

getHeroeByIdAsync(10).then(heroes => console.log('Heroe', heroes))
.catch(err => console.warn(err));