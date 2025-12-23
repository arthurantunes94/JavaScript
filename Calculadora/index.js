import { createInterface} from 'readline'
import { soma } from './operacaoMatematica.js'

const leitor = createInterface({
    input: process.stdin,
    output: process.stdout
})

leitor.question('Digite o primeiro numero:', (numero1) => {

    leitor.question('Digite o segundo numero:', (numero2) => {

        const n1 = Number(numero1)
        const n2 = Number(numero2)

        let resultado = null

        resultado = soma(n1, n2)

        if(resultado != null){
            console.log(resultado)
        }
        
        leitor.close()

    })

})

