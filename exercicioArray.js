const listaDeCompras = ['arroz', 'feijão', 'macarrão', 'tomate'];

console.log(`Segundo item da lista de compras: ${listaDeCompras[1]}`);

listaDeCompras[listaDeCompras.length - 1] = 'fruta';

console.log('Lista de compras atualizada:', listaDeCompras);

//---------------------------------------------------------
const despesas = [120, 80, 45.5, 200, 60];
let totalDespesas = 0;

for(let i = 0; i < despesas.length; i++){
    totalDespesas += despesas[i];
}

console.log(`Total de despesas: R$ ${totalDespesas.toFixed(2)}`);

//---------------------------------------------------------
const estudantes = ['Carla', 'João', 'Marina', 'Lucas', 'Beatriz'];

for(let estudante of estudantes){
    console.log(`Estudante: ${estudante}`);
}

const mensagens = ['Pedido confirmado', 'Pagamento aprovado', 'Produto enviado'];

mensagens.forEach((mensagem) => {
    console.log(`Notificação: ${mensagem}`);
});

//---------------------------------------------------------
const tarefas = ['Estudar', 'Lavar roupa', 'Fazer compras'];

tarefas.push('Cozinhar');
console.log('Tarefas após adicionar:', tarefas);

tarefas.pop();
console.log('Tarefas após remover:', tarefas);

//---------------------------------------------------------
const pedidos = ['camiseta', 'calça', 'tênis'];
const copiaPedidos = pedidos.slice();

copiaPedidos.push('boné');

console.log('Pedidos originais:', pedidos);
console.log('Cópia dos pedidos após adição:', copiaPedidos);

//---------------------------------------------------------
 const livros = ['Dom Casmurro', 'O Cortiço', 'Capitães da Areia', 'Iracema'];
const livroProcurado = 'O Cortiço';

/* if(livros.includes(livroProcurado)){
    console.log(`${livroProcurado} está disponível na biblioteca.`);
} else {
    console.log(`${livroProcurado} não foi encontrado na biblioteca.`);
} */

if  (livros.indexOf(livroProcurado) !== -1){
    console.log(`${livroProcurado} está disponível na biblioteca.`);
} else {
    console.log(`${livroProcurado} não foi encontrado na biblioteca.`);
}

//---------------------------------------------------------
const precos = [100, 80, 50, 120];

const precosComDesconto = precos.map((preco) => {
    return preco - (preco * 0.1);
});

console.log('Preços com desconto:', precosComDesconto);

//---------------------------------------------------------
const participantes = [
  { nome: 'Ana', idade: 17 },
  { nome: 'Bruno', idade: 22 },
  { nome: 'Carla', idade: 19 },
  { nome: 'Daniel', idade: 15 },
  { nome: 'Eduarda', idade: 25 }
];

const maioresDeIdade = participantes.filter((participante) => {
    return participante.idade >= 18;
});

for(let participante of maioresDeIdade){
    console.log(`Acesso liberado para: ${participante.nome}`);
}

const listaAprovados = maioresDeIdade.map((participante) => participante.nome);

console.log('Lista de aprovados:', listaAprovados);

//---------------------------------------------------------
const produtos = [
  { nome: 'Notebook', preco: 2500, quantidadeVendida: 75 },
  { nome: 'Mouse', preco: 100, quantidadeVendida: 180 },
  { nome: 'Teclado', preco: 150, quantidadeVendida: 125 },
  { nome: 'Monitor', preco: 900, quantidadeVendida: 95 }
];

function mostraTodosOsProdutos(listaProdutos){
    listaProdutos.forEach((produto) => {
        console.log(`Produto: ${produto.nome} | Preço: R$ ${produto.preco} | Quantidade vendida: ${produto.quantidadeVendida}`);
    }); 
}

function filtraMaisVendidos(listaProdutos, limite = 100){
    const produtosMaisVendidos = listaProdutos.filter((produto) => produto.quantidadeVendida > limite);
    for (let produto of produtosMaisVendidos){
        console.log(produto.nome);
    }
    
}

function valorTotalProduto(listaProdutos){
    let valorTotalProduto = 0;
    for(let produto of listaProdutos){
        valorTotalProduto = produto.preco * produto.quantidadeVendida;
        console.log(`${produto.nome}: R$ ${valorTotalProduto}`);
    }   
}

function verificaProdutoMaisLucrativo(listaProdutos){
    let produtoMaisLucrativo = null;
    let maiorValor = 0;

    for(let produto of listaProdutos){
        let valorTotalProduto = produto.preco * produto.quantidadeVendida;
        if(valorTotalProduto > maiorValor){
            maiorValor = valorTotalProduto;
            produtoMaisLucrativo = produto.nome;
        }
    }
    console.log(`\nProduto mais lucrativo: ${produtoMaisLucrativo} com R$ ${maiorValor} em vendas.`);
}

function exibirRelatorioVendas(listaProdutos){
    console.log('Relatório de produtos vendidos:\n');
    mostraTodosOsProdutos(listaProdutos);
    console.log('\nProdutos com alto volume de vendas (> 100 unidades):');
    filtraMaisVendidos(listaProdutos);
    console.log('\nTotal de vendas por produto:');
    valorTotalProduto(listaProdutos);
    verificaProdutoMaisLucrativo(listaProdutos);
}

exibirRelatorioVendas(produtos);