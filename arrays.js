const nomes = [
    'Arthur',
    'Thomas',
    'Brenda',
    'Nala'
]

// nomes.push('Vovós')

// nomes.shift('Arthur')

for (let index = 0; index < nomes.length; index++) {
    console.log('Nome:', nomes[index])
}

console.log(nomes.length)

nomes.forEach((nome) =>{
    console.log('Olá,', nome)
})

const numeros = [
    1,2,3,4,5,6
]

let somandoNumeros = 0

for (let index = 0; index < numeros.length; index++) {
    somandoNumeros = somandoNumeros + numeros[index]
    console.log(somandoNumeros)
}

const notas = [
    5,5,5,5
]

let somaNotas = 0
let mediaNotas

for (let index = 0; index < notas.length; index++) {
    somaNotas += notas[index]
}

mediaNotas = somaNotas / 4

console.log('A média é:', mediaNotas)

const precos = [
    10,20,30,40
]

const desconto = 0.1

const descontoPreco = precos.map((preco) => {
    return preco - (preco * desconto)
})

console.log('Preços com 10%', descontoPreco)

const idades = [
    10, 15, 18, 20
]

const maioresIdade = idades.filter((idade) => {
    if(idade >= 18){
        return idade
    }
})

console.log(maioresIdade)

const precosCompra = [
    10,20,30,40
]

let somaCompras = 0
const descontoCompra = 0.2
let valorFinalCompra = 0

for (let index = 0; index < precosCompra.length; index++) { 
    somaCompras += precosCompra[index]
}

console.log('Valor total da compra:', somaCompras)
console.log('Valor de desconto:', descontoCompra * 100, '%')
valorFinalCompra = somaCompras - (somaCompras * descontoCompra)
console.log('Valor final da compra com desconto:', valorFinalCompra)

const tarefas = [
    '[x] Arrumar a cama',
    '[x] Lavar a louça',
    '[] Arrumar quarto thomas',
    '[] Lavar Banheiro'
]

const tarefasAFazer = tarefas.filter((tarefa) =>{
    if(tarefa.startsWith('[]')){
        return tarefa
    }
})

console.log('Tarefas a fazer:', tarefasAFazer)
