function saudacao(nome) {
    if(nome){
        return `Olá, ${nome}! Bem-vindo(a)!`;
    } else{
        return "Olá! Bem-vindo(a)!";
    }
}

console.log(saudacao("Maria")); // Olá, Maria! Bem-vindo(a)!
console.log(saudacao()); // Olá! Bem-vindo(a)!

//---------------------------------------------------------
function calcularDesconto(preco, desconto = 10) {
    desconto = preco * (desconto / 100);
    return preco - desconto;
}

console.log(calcularDesconto(100, 10));
console.log(calcularDesconto(100));

//---------------------------------------------------------
const calcularMedia = (notaA, notaB) => {
    return (notaA + notaB) / 2;
}

console.log(calcularMedia(8, 6));
console.log(calcularMedia(9, 7));

//---------------------------------------------------------
const verificarParidade = numero => {
    return numero % 2 === 0 ? "Par" : "Ímpar";
}

console.log(verificarParidade(4));
console.log(verificarParidade(7));

//---------------------------------------------------------
function calcularFrete(distancia){
    if(distancia <= 5){
        return 5;
    } else if(distancia > 5 && distancia <= 20){
        return distancia * 0.5;
    } else {
        return 20;
    }
}

console.log(calcularFrete(3));
console.log(calcularFrete(10));
console.log(calcularFrete(25));

//---------------------------------------------------------
function processarPedido(nome, tipoCliente, fnMensagemPersonalizada) {
    console.log(`Processando pedido de ${nome}...`);
    fnMensagemPersonalizada(nome, tipoCliente);
}

function mensagemPersonalizada(nome, tipoCliente){
    switch(tipoCliente){
        case "vip":
            console.log(`Obrigado pela preferência, ${nome}! Você ganhou frete grátis.`);
            break;
        case "Novo":
            console.log(`Bem-vindo(a), ${nome}! Aproveite um cupom de boas-vindas.`);
            break;
        case "Regular":
            console.log(`Obrigado pela sua compra, ${nome}!`);
            break;
        default:
            console.log("Obrigado por comprar conosco!");
            break;          
    }
}

processarPedido("Lucas", "vip", mensagemPersonalizada);
processarPedido("Fernanda", "Regular", mensagemPersonalizada);
processarPedido("João", "Novo", mensagemPersonalizada);

//---------------------------------------------------------
function mostrarResultado(nome, fnMostrarMensagem){
    console.log('Processando sua pergunta...');
    setTimeout(() => {
       mensagemResultado(nome); 
    }, 3000); 
}

function mensagemResultado(nome){
    console.log(`Olá, ${nome}! Aqui está a resposta para sua dúvida.`);
}

/* mostrarResultado("Ana", mensagemResultado); */

//---------------------------------------------------------
function avaliarDesempenho(pontos, fnMensagemPersonalizada){
    console.log(`Pontuação: ${pontos}`);
    mensagemDesempenho(pontos);
}

function mensagemDesempenho(pontos){
    if(pontos >= 70){
        console.log("Parabéns! Você foi aprovado!");
    } else if(pontos >= 50 && pontos < 70){
        console.log("Você precisa de reforço!");
    } else {
        console.log("Infelizmente, você não passou. Tente novamente.");
    }
}

avaliarDesempenho(85, mensagemDesempenho);
avaliarDesempenho(65, mensagemDesempenho);
avaliarDesempenho(40, mensagemDesempenho);

//--------------------------------------------------------
const nomeAparelho = "Geladeira";

function  calcularConsumo( potencia, horasUsoDiario ){
    return (potencia * horasUsoDiario * 30) / 1000;
}

function classificarConsumo(consumo){
    if(consumo < 50){
        return "Baixo consumo";
    } else if(consumo >= 50 && consumo < 199){
        return "Consumo moderado";
    } else {
        return "Alto Consumo";
    }
}

const consumoMensal = calcularConsumo(150, 8);
const classificacao = classificarConsumo(consumoMensal);

function exibirConsumo(nome, consumoMensal, classificacao){
    console.log(`${nome} tem consumo de ${consumoMensal.toFixed(2)} kWh/mês e é classificada como ${classificacao}.`);
}

exibirConsumo(nomeAparelho, consumoMensal, classificacao);

//---------------------------------------------------------
const participantes = [
  { nome: "Laura", pontuacao: 92 },
  { nome: "Pedro", pontuacao: 67 },
  { nome: "Clara", pontuacao: 44 },
  { nome: "Arthur", pontuacao: 55 },
  { nome: "Sofia", pontuacao: 78 },
  { nome: "Miguel", pontuacao: 81 }
];

const sortearParticipante = (listaParticipantes) => {
    const indiceSorteado = Math.floor(Math.random() * listaParticipantes.length);
    return listaParticipantes[indiceSorteado];
}

const avaliarPontuacao = (pontuacao) => {
    if(pontuacao > 80){
        return "Parabéns, você foi premiado!";
    } else if(pontuacao >= 50 && pontuacao <= 80){  
        return "Você quase conseguiu! Fique de olho nos próximos sorteios.";
    } else {
        return "Infelizmente, não foi dessa vez.";
    }
}

function exiberResultado(participante){
    console.log('Sorteando...');
    setTimeout(() => {
        console.log(`O participante sorteado é: ${participante.nome}`);
        console.log(`Pontuação: ${participante.pontuacao}`);
        console.log(avaliarPontuacao(participante.pontuacao));  
    }, 2000);
}

function realizarSorteio(lista){
    const participanteSorteado = sortearParticipante(lista);
    exiberResultado(participanteSorteado);
}

realizarSorteio(participantes);

//---------------------------------------------------------
function contagemRegressiva(numero){
    if(numero > 0){
        console.log(`numero: ${numero}`);
        contagemRegressiva(numero - 1); 
    } else{
        console.log("Lançar!");
    }
}

contagemRegressiva(5);

//---------------------------------------------------------
