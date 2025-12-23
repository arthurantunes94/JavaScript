class Livro{
    constructor(titulo, autor){
        this.titulo = titulo
        this.autor = autor
    }

    descrever() {
        return `O livro "${this.titulo}" foi escrito por "${this.titulo}"`
    }
}

const livro1 = new Livro('Thomas o doidinho', 'Brenda Mendes')
const livro2 = new Livro('Arthur o sapece', 'Brenda Mendes')

console.log(livro1.descrever())
console.log(livro2.descrever())
