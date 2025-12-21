const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let acertos = 0

rl.question('Qual o seu nome?', (nome) => {
    console.log('Bem vindo ao jogo', nome)

    rl.question('1 - Qual o nome do maior time da terra?\n(a)Santos\n(b)Palmeiras\n(c)Flamengo\n>', (resposta1) => {
        if(resposta1 == 'a'){
            acertos++
        }
        rl.question('2 - Qual o ano do ultimo titulo de libertadores do Santos?\n(a)2013\n(b)2011\n(c)2000\n>', (resposta2) =>{
            if(resposta2 == 'b'){
                acertos++
            }
            rl.question('3 - Qual o nome do maior artilheiro do Santos?\n(a)Neymar\n(b)Pelé\n(c)Coutinho\n>', (resposta3) =>{
                if(resposta3 == 'b'){
                    acertos++
                }
                switch (acertos) {
                    case 0:
                        console.log('Você não acertou nenhuma, você não é Santista')
                        break
                    case 1:
                        console.log('Você acertou apenas 1, você não é tão fã do Santos')
                        break
                    case 2:
                        console.log('Você acertou duas, você é quase um fanático pelo Santos')
                        break
                    case 3:
                        console.log('Você acertou todas, você com certeza é um torcedor fanático')
                        break
                    default:
                        break
                }
                rl.close()
            })
        })
    })
})

