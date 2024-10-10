//arreglos

const arreglo = [1,2,3,4,5,6,7,8,9,10];



//NO SE RECOMIENDA PUSH

let arreglo2 = [...arreglo,5]
//arreglo2.push(11);

const arreglo3 = arreglo2.map(function(numero){
    return numero * 2;
});

console.log(arreglo);
console.log(arreglo3);