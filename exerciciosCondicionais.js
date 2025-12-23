import { constants } from "buffer";

//-----------------------------
const idade = 20;

if(idade >= 18){
    console.log('Acesso permitido');
} else{
    console.log('Acesso negado');  
}

//----------------------------
const temperatura = 30;

if(temperatura > 25){
    console.log('Quente');
} else if(temperatura >= 15 && temperatura <= 25){
    console.log('Agradável');
} else{
    console.log('Frio');
}

//----------------------------
const idadeAluno = 15;

if(idadeAluno >= 18){
    console.log('Adulto');
}else if(idadeAluno >= 12 && idadeAluno < 18){
    console.log('Juvenil');
}else{
    console.log('Infantil');
}

const diaSemana = 5;

if(diaSemana >=1 && diaSemana <=5){
    console.log('A loja está aberta no horário normal: 9h às 18h.');
}else if(diaSemana == 0 || diaSemana === 6 ){
    console.log('A loja está aberta em horário especial: 10h às 14h.');
}

//----------------------------
const usuario = "teste";

if(usuario === "admin"){
    console.log("Login bem-sucedido!");
} else{
    console.log("Usuário inválido.");
}

//----------------------------
const fruta = "abacaxi";

if(fruta !== "abacaxi" && fruta !== "laranja"){
    console.log("Fruta incompatível para a receita.");
} else{
    console.log("Fruta compatível para a receita.");
}


//----------------------------
const carrinhoVazio = true;

if(!carrinhoVazio){
    console.log("Compra finalizada com sucesso!");
} else{
    console.log("Não é possível finalizar a compra: carrinho vazio.");
}

//----------------------------
const status = "pendente";

switch(status){
    case 'pendente':
        console.log("Pagamento pendente");
        break;
    case "aprovado":
        console.log("Pagamento aprovado.");
        break;
    case "reprovado":
        console.log("Pagamento recusado.");
        break;
    default:
        console.log("Status de pagamento desconhecido");
        break;
}

//----------------------------
const pontos = 60;
const vidas = 3;

if(pontos > 50 && vidas > 0){
    console.log("Próximo nível liberado!");
}else{
    console.log("Não pode avançar para o próximo nível.");
}

//-----------------------------
const bateria = 10;

if(bateria < 20){
    console.log("Crítica");
} else if(bateria >= 20 && bateria <= 80){
    console.log("Moderada");
} else{
    console.log("Cheia");
}