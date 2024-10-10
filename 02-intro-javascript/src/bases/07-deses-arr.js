//desestrucutacion de arreglos

const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [,,p1] = personajes;

console.log(p1);



const retornaArreglo = () => {
    return ['ABC', 123];}

const [x,y] = retornaArreglo();
console.log(x,y);

//TAREA
const usS = (valor) => {
    return [valor, ()=>{console.log('Hola Mundo')}];

}

const [nombre, setNombre] = usS('Goku');
console.log(nombre);
setNombre();