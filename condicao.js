//Verificação de idade para compra de bebida
let idade = 18
if(idade >= 18){
    console.log('Pode comprar a bebida')
}else{
    console.log('Não pode comprar a bebida')
}

//Saudação de acordo com a hora
let horaAtual = 18

if(horaAtual >= 6 && horaAtual < 12){
    console.log('Bom dia')
} else if(horaAtual >= 12 && horaAtual < 18){
    console.log('Boa Tarde')
} else{
    console.log('Boa Noite')
}

//Verificação de número positivo ou negativo
let numero = -2

if(numero > 0 ){
    console.log('Numero positivo')
} else if(numero == 0){
    console.log('Igual a 0')
} else{
    console.log('Numero negativo')
}

//Conversão de nota em conceito
let nota = 5

if(nota >= 9 && nota <=10){
    console.log('Nota: A')
} else if(nota >=8 && nota < 9){
    console.log('Nota: B')
} else if(nota >= 6 && nota < 8){
    console.log('Nota: C')
} else if(nota >= 4 && nota < 6){
    console.log('Nota: D')
} else{
    console.log('Nota: E')
}

//Número par ou ímpar com ternário
numero = 7
parImpar = numero % 2

parImpar == 0 ? console.log('Numero par') : console.log('Numero impar')

//Menu com switch-case
let opcao = 3

switch (opcao) {
    case 1:
        console.log('Cadastrar')
        break;
    case 2:
        console.log('Listar')
        break;
    case 3:
        console.log('Sair')
        break;
    default:
        break;
}

//Validação de campo obrigatório
let email = 'teste'

if(!email){
    console.log('Preencha o campo de e-mail')
} else{
    console.log('E-mail válido')
}

//Validação de senha segura
let senha = 'Te231241243'

if(senha.length < 6){
    console.log('Senha muito curta')
}else{
    console.log('Senha valida')
}

//Compra com saldo
let saldoDisponivel = 100
let valorCompra = 50

let temSaldo = saldoDisponivel - valorCompra

temSaldo < 0 ? console.log('Saldo insuficiente') : console.log('Compra aprovada')

//Validação de formulário completo
let nome = 'Arthur'
email = 'teste@teste.com'
idade = 3

if(nome && email && idade && idade > 0){
    console.log('Formulário enviado com sucesso')
} else{
    console.log('Formulario não foi enviado com sucesso')
}