class Pessoa{
    constructor(nome, idade, filho = null){
        this.nome = nome
        this.idade = idade
        this.filho = filho
    }
    mostrarLista(){
        console.log(this)
    }
}

const pessoa1 = new Pessoa('Maria', 65)
const pessoa2 = new Pessoa('Pedro', 53, pessoa1)
const pessoa3 = new Pessoa('João', 41, pessoa2)
const pessoa4 = new Pessoa('Beatriz', 22, pessoa3)



