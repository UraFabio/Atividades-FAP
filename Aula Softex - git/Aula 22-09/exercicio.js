class Caminhao{
    constructor(name, type){
        this.name = name
        this.type = "caminhoneiro"
    }
}

class Navio{
    constructor(name, type){
        this.name = name
        this.type = "navegador"
    }
}

class Aviao{
    constructor(name,type){
        this.name = name
        this.type = "piloto de aviao"
    }
}

class Factory{
    create(nome,type){
        switch(type){
            case 1:
                return new Caminhao(nome)
                break
            case 2:
                return new Navio(nome)
                break
            case 3:
                return new Aviao(nome) 
                break
        }
    }
}

factory = new Factory

console.log(factory.create("Fabio", 1))
console.log(factory.create("Rafael", 2))
console.log(factory.create("Beatriz", 3))