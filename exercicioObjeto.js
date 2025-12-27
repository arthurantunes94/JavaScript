const produto = {
    nome: 'Smartphone',
    preco: 1500,
    dispoinivel: true,
}

function exibirProduto(produto){
    produto.dispoinivel = produto.dispoinivel ? 'sim' : 'não';
    console.log(`nome: ${produto.nome} | preço: R$ ${produto.preco} | disponível: ${produto.dispoinivel}`);
}

exibirProduto(produto);

//---------------------------------------------------------
const configuracoes = {
    tema: 'dark',
    notificacoes: true,
    idioma: 'pt-BR'
};

console.log(configuracoes.tema);
console.log(configuracoes['idioma']);

//---------------------------------------------------------
const receita = {
    nome: 'Bolo de Chocolate',
    ingredientes: ['chocolate', 'farinha', 'açúcar', 'ovos', 'manteiga'],
    tempoPreparo: 60,
};

console.log(`Ingrediente complementar: ${receita.ingredientes[2]}`);

//---------------------------------------------------------
const carro = {
  marca: 'Toyota',
  modelo: 'Corolla',
  ano: 2022,
  modeloAntigo: 'Corolla XEi'
};

delete carro.modeloAntigo;

console.log(carro);

//---------------------------------------------------------
const dispositivos = [
    { tipo: 'notebook', status: true },
    { tipo: 'smartphone', status: false },
    { tipo: 'tablet', status: true },
]

for (let dispositivo of dispositivos){
    console.log(`Tipo: ${dispositivo.tipo} | Status: ${dispositivo.status ? 'Ativo' : 'Inativo'}`);
}

//---------------------------------------------------------
const maquina = {
  nome: 'Esteira Transportadora',
  funcionando: true,
  exibirStatus: function() {
    console.log(`A máquina ${this.nome} está ${this.funcionando ? 'funcionando' : 'parada'}.`);
  }
};

maquina.exibirStatus();

//---------------------------------------------------------
const pessoa = [
    ['nome', 'Carlos'],
    ['idade', 30],
    ['cidade', 'Santos']
]

function arrayParaObjeto(arr){
    const obj = {};
    for (let item of arr) {
        obj[item[0]] = item[1];
    }
    return obj;
}

console.log(arrayParaObjeto(pessoa));

//---------------------------------------------------------
const relatorio = {
  temperatura: 75,
  vibracao: 40,
  pressao: 55,
  nivelRuido: 30
};

function pegarChaves(obj){
    return Object.keys(obj);
}

function pegarValores(obj){
    return Object.values(obj);
}

function detalharStatusMedicoes(obj){
    console.log('Detalhamento: ');
    
    for (let chave of pegarChaves(obj)){
        const alerta = obj[chave] > 50 ? '(alerta)' : '(ok)';
        console.log(`${chave}: ${obj[chave]} ${alerta}`);
    }
}

function exibirRelatorio(obj){
    console.log(`Catgorias Avaliadas: ${pegarChaves(obj).join(', ')}`);
    console.log(`Valores registrados: ${pegarValores(obj).join(', ')}`);
    detalharStatusMedicoes(obj);
}

exibirRelatorio(relatorio);

//---------------------------------------------------------
const manutencao = {
  jan: 2,
  fev: 0,
  mar: 5,
  abr: 4,
  mai: 0,
  jun: 7
};

function totalDiasManutencao(obj){
    let total = 0;
    for (let valor of Object.values(obj)){
        total += valor;
    }
    return total;
}

function totalMesesManutencao(obj){
    let total = 0;
    for (let valor of Object.values(obj)){
        if (valor > 0){
            total++;
        }
    }
    return total;
}

function alertaDiasParados(obj, limite = 20){
    const totalDias = totalDiasManutencao(obj);
    if (totalDias > limite){
        console.log('Atenção! Acima do limite anual.');
    } else {
        console.log('Status: Dentro do limite anual.');
    }
}

function exibirRelatorioManutencao(obj){
    console.log(`Total de dias parados: ${totalDiasManutencao(obj)}`);
    console.log(`Meses com manutenção registrada: ${totalMesesManutencao(obj)}`);
    alertaDiasParados(obj);
}

exibirRelatorioManutencao(manutencao);

//---------------------------------------------------------
const curso = {
  titulo: "JavaScript Intermediário",
  estudantes: [
    { nome: "Ana", progresso: 85 },
    { nome: "Carlos", progresso: 40 },
    { nome: "Juliana", progresso: 72 },
    { nome: "Pedro", progresso: 60 }
  ],
    gerarRelatorio: function() {
        let somaNotas = 0;
        let mediaTurma = 0;

        for (let estudante of this.estudantes){
            const status = estudante.progresso >= 70 ? 'Aprovado' : 'Reprovado';
            console.log(`Estudante: ${estudante.nome} | Progresso: ${estudante.progresso}% | Status: ${status}`);
            somaNotas += estudante.progresso;
            mediaTurma = somaNotas / this.estudantes.length;
        }
        console.log(`Total de estudantes: ${this.estudantes.length}`);
        console.log(`Média geral da turma: ${mediaTurma}%`);
    }
};

curso.gerarRelatorio();