let numeroFinal = 2;

for (let i = 1; i <= numeroFinal; i++) {
    console.log(`Número atual: ${i}`);
}

//-------------------------------
for(let i = 10; i >= 0; i--) {
    console.log(i);
}

console.log('Lançar');

//-------------------------------
numeroFinal = 30;

for (let i = 1; i <= numeroFinal; i++) {
    if(i % 2 === 0) {
        console.log(`Número par: ${i}`);
    }
}

//-------------------------------
const senhaCadastrada = 'seguranç@2025';

for(let i = 0; i < senhaCadastrada.length; i++) {
    console.log(senhaCadastrada[i]);
}

//-------------------------------
const entradas = ["Ana", "Bruno", "Carla", "fim", "Daniel"];

let palavraEncontrada = '';
let contador = 0;

while(palavraEncontrada !== 'fim') {
    palavraEncontrada = entradas[contador];
    console.log(palavraEncontrada);
    contador++;
}

//-------------------------------
for(let i = 1; i <=20; i++){
    if(i === 10){
        console.log('Número proibido encontrado! Encerrando...');
        break;
    }
    console.log(i);
}

//-------------------------------
const totalDias = 20;
let valorEconomizado = 0;
let totalEconomizado = 0;

for(let dia = 1; dia <= totalDias; dia++) {
    valorEconomizado += 1;
    totalEconomizado += valorEconomizado;
    console.log(`Dia ${dia}: Total acumulado: R$${totalEconomizado}`);
}

console.log(`Total economizado após ${totalDias} dias: R$${totalEconomizado}`);

//-------------------------------
const tempoMinimo = 10;
const temperaturaIdealAlcancadaEm = 6;

for(let i = 1; i <= tempoMinimo; i++) {
    console.log(`Aquecendo... segundo ${i}`); 
    if(i === temperaturaIdealAlcancadaEm) {
        console.log('Temperatura ideal atingida.');
    }
}
console.log(`Tempo total de aquecimento: ${tempoMinimo} segundos`);

//-------------------------------
const caixas = [12, -1, 8, 0, -5, 3, 7, 14];
contador = 0;
let caixasProcessadas = 0;

while(caixasProcessadas < 5 && contador < caixas.length){
    if(caixas[contador] < 0){
        console.log('Caixa danificada, ignorada.'); 
        contador++;
    }else{
        console.log(`Caixa processada: ${caixas[contador]}`);
        contador++;
        caixasProcessadas++;
    }
    if(caixasProcessadas === 5){
        console.log(`Limite de caixas processadas atingido!`);
    }
}

//-------------------------------
const tentativas = ["1234", "secreto", "admin"];
const senhaCorreta = "secreto";

for(let i = 0; i < 3; i++) {
    if(tentativas[i] === senhaCorreta) {
        console.log(`Acesso permitido!`);
        break;
    } else {
        i === 2 ? console.log(`Acesso bloqueado. Número máximo de tentativas atingido.`) : console.log(`Tentativa ${i + 1} inválida.`);
    }
}
           
