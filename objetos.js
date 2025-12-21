const pessoa = {
    nome: 'Arthur',
    idade: 31,
    profissao: 'Analista de teste automatizado'
}

console.log('Nome:', pessoa.nome)

pessoa.idade = 32
pessoa.cidade = 'Santos'

function descricaoPessoa(p){
    return `Olá meu nome é ${p.nome}, tenho ${p.idade} sou ${p.profissao} e moro na cidade de ${p.cidade}`
}


console.log(descricaoPessoa(pessoa))

const pessoas = [
    {nome: 'Arthur', idade: 31},
    {nome: 'Brenda', idade: 29},
    {nome: 'Thomas', idade: 5}
]

console.log(pessoas)

for(let pessoa of pessoas){
    if(pessoa.idade >= 18){
        console.log(pessoa.nome, 'é maior de idade')
    }
}

const usuario = {
    nome: 'Arthur', 
    saudacao: function(){
        console.log('Ola meu nome é', this.nome)
    }
}

usuario.saudacao()

for(const chave in pessoa){
    console.log(chave, ':', pessoa[chave])
}

const produto = {
    nome: 'Arroz',
    preco: 5,
    quantidade: 3
}

let valorTotalProduto = produto.preco * produto.quantidade

console.log('Preço final do produto:', valorTotalProduto)