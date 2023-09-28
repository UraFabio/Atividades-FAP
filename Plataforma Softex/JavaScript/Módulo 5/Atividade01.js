class Carro{
    constructor(marca, modelo, ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.ligado = false;
        this.tanqueCheio = true;
    }
    ligar(){
        if(!(this.ligado)) {
            console.log("Ligando o carro...")
            this.ligado = true
        }else console.log("O carro ja esta ligado.")
    }
    acelerar(){
        if(!(this.ligado)) console.log("O carro está desligado.")
        else {
            console.log("Vruuummmmmm...")
            this.tanqueCheio = false
        }
    }
    abastecer(){
        if(this.tanqueCheio) console.log("O tanque já está cheio")
        else {
            console.log("Abastecendo...")
            this.tanqueCheio = true
        }
    }   
}

class Computador{
    constructor(marca, RAM, armazenamento){
        this.marca = marca
        this.RAM = RAM
        this.armazenamento = armazenamento
        this.ligado = false
    }
    ligar() {
        if(!(this.ligado)) {
            console.log("Ligando o PC...")
            this.ligado = true
        }else console.log("O PC ja esta ligado") 
    }
    mostrarRAM(){
        console.log(`O PC possui ${this.RAM}GB de memoria RAM.`)
    }
    mostrarMarca(){
        console.log(`O PC é da marca ${this.marca}.`)
    }
    mostrarArmazenamento() {
        console.log(`O PC possui ${this.armazenamento}GB de armazenamento.`)
    }

}

class Cochilo{
    constructor(local, tempo, acordouComSono){
        this.local = local
        this.tempo = tempo
        this.acordouComSono = acordouComSono
    }
    dormirMais(){
        if(!(this.acordouComSono)) console.log("Dormir mais...")
        else console.log("Pronto pra levantar.")
    }
    Local(){
        console.log(`Dormiu na ${this.local}`)
    }
    Duracao(){
        console.log(`Dormiu por ${this.tempo} horas`)
    }

}

class Conversa{
    constructor(pessoas, assunto, interessante){
        this.pessoas = pessoas
        this.assunto = assunto
        this.interessante = interessante
    }
    sair(){
        if(!(this.interessante)) console.log("Ficar na conversa")
        else console.log("Ficar na conversa")
    }
    Pessoas(){
        console.log(`Tem ${this.pessoas} pessoas na conversa`)
    }
    Assunto(){
        console.log(`O assunto da conversa é sobre ${this.assunto}.`)
    }
}

const carro1 = new Carro('Nissan', '370z', 1980)
const computador1 = new Computador('DELL', 16, 512)
const cochilo1 = new Cochilo('cama', 2, true)
const conversa1 = new Conversa(2, "carros", true)

carro1.abastecer() 
carro1.ligar()
carro1.acelerar()

computador1.ligar()
computador1.mostrarArmazenamento()
computador1.mostrarMarca()
computador1.mostrarRAM()

cochilo1.dormirMais()
cochilo1.Duracao()
cochilo1.Local()

conversa1.Assunto()
conversa1.Pessoas()
conversa1.sair()