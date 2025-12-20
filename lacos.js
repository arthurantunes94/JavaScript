//Contar quantos números pares e impares tem de 1 a 100
let numerosPares = 0
let numerosImpares = 0

for (let numero = 1; numero <= 100; numero++) {
    if(numero % 2 > 0){
        console.log('Numero Ímpar:', numero)
        numerosImpares++
    } else{
        console.log('Numero Par:', numero)
        numerosPares++
    }
}

console.log('Numeros Pares:', numerosPares)
console.log('Numeros Impares:', numerosImpares)