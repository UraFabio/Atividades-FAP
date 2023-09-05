/* Deve ser executado no programiz*/

function Banco(conta, saldo, tipo, agencia){
    this.conta = conta;
    this.saldo = saldo;
    this.tipo = tipo;
    this.agencia = agencia;
    this.mostrarSaldo = function (){
        console.log(this.saldo)
    }
    this.deposito = function (valor){
        this.saldo+=valor;
    }
    this.saque = function (valor){
        this.saldo -=valor;
    }
    this.mostrarConta = function (){
        console.log(this.conta)
    }
}
var conta = prompt("Digite o numero da conta: ")
var saldo = Number(prompt("Digite seu saldo inicial: "))
var tipo = prompt("Digite o tipo da conta: ")
var agencia = prompt("Digite a agencia: ")

var meuBanco = new Banco(conta, saldo, tipo, agencia)
while(true){
    console.log(("Escolha a operação que deseja realizar: "))
    console.log("1 - mostrar saldo")
    console.log("2 - depositar")
    console.log("3 - sacar")
    console.log("4 - mostrar numero da conta")
    console.log("0 - sair")
    var esc = prompt(" ")
    
    switch(esc){
        case "1":
            meuBanco.mostrarSaldo()
            break
        case "2":
            var valor = Number(prompt("Digite o valor do depostio: "))
            meuBanco.deposito(valor)
            console.log("Deposito realizado com sucesso!!")
            break
        case "3":
            var valor = Number(prompt("Digite o valor a ser sacado: "))
            meuBanco.saque(valor)
            console.log("Saque realizado com sucesso!!")
            break
        case "4":
            meuBanco.mostrarConta()
            break
        default:
            break
    }
    if(esc == "0"){
        console.log("Operações finalizadas.")
        break
    }
}