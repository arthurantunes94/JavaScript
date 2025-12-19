//Exercicio 1 - Boas-vindas personalizadas
let nome = 'Arthur'
console.log('Olá, ',nome,' ! Seja bem-vindo(a) ao curso de JavaScript!"')

//Exercicio 2 - Cálculo de idade
let anoAtual = 2025
let anoNascimento = 1994
let idade = anoAtual - anoNascimento
console.log('Eu tenho ', idade, ' anos')

//Exercicio 3 - Mensagem de localização
let cidade = 'Santos'
let estado = 'São Paulo'
let pais = 'Brasil'
console.log('Você está em ', cidade, ' - ', estado, ' , ', pais)

//Exercicio 4 - Tipo da variável
let temCarteira = true
console.log(typeof temCarteira)

//Exercicio 5 - Simulação bancária simples
let saldoInicial = 0
let deposito = 200
let saque = 50
let valorConta = saldoInicial + (deposito - saque)
console.log('Meu saldo: ', valorConta)

//Exercicio 6 - Média de notas
let notaMatematica = 5
let notaPortugues = 10
let notaCiencias = 3
let media = (notaCiencias + notaMatematica + notaPortugues)/3
console.log('Minha média: ', media)

//Exercicio 7 - Reajuste de salário
let salario = 3000
let aumentoPorcentagem = salario*(10/100)
let valorSalarioAumentado = salario + aumentoPorcentagem
console.log('Meu salário após o aumento é ', valorSalarioAumentado)

//Exercicio 8 - Contador de cliques
let cliques = 0
cliques++
cliques++
cliques++
console.log('Quantidade de vezez clicadas', cliques)

//Exercicio 9 - Constantes não podem ser alteradas
const pi = 3.14
console.log('Como o valor de pi não muda, então posso criar ele como const', pi)

//Exercicio 10 - Concatenando tipos diferentes
let mensagem = 'oi'
let numero = 2
let juncao = mensagem + numero
console.log(typeof juncao)
