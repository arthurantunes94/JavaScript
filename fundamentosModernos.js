const pessoa = {
    nome: 'Arthur',
    idade: 31,
    email: 'teste@teste.com'
}

const {nome, idade, email} = pessoa

console.log(nome)
console.log(idade)
console.log(email)

//---------------------
const linguagensProgramacao = [
    'Java',
    'C#',
    'JavaScript'
]

const [ling1, ling2, ling3] = linguagensProgramacao

console.log(ling1)
console.log(ling2)
console.log(ling3)

//-----------------------------
function somarTudo(...numeros){
    return numeros.reduce((total, num) => total + num, 0)
}

console.log(somarTudo(1,2,3,4,5))

//----------------------------
const frutas = [
    'Maça',
    'Banana'
]

const maisFruta = [
    'Pera',
    'Uva'
]

const todasAsFrutas = [
    ...maisFruta,
    ...frutas
]

console.log(todasAsFrutas)

//------------------------
const pessoa1 = {
    nome: 'Arthur'
}

const pessoa2 = {
    idade: 20
}

const pessoa3 = {
    ...pessoa1,
    ...pessoa2
}

console.log(pessoa3)

//-------------------------
function saudacao(nome){
    if(nome){
        console.log('Ola,', nome)
    } else{
        console.log('Ola, visitante')
    }
}

saudacao()

//------------------------
const dataAtual = new Date()

console.log(dataAtual.getFullYear())
console.log(dataAtual.getMonth())
console.log(dataAtual.getDate())

//---------------------------


