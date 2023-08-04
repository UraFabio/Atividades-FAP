let n1 = Number(prompt("Digite o primeiro numero: "))
let n2 = Number(prompt("Digite o segundo numero: "))
let n3 = Number(prompt("Digite o terceiro numero: "))

let maior = n1

if(n2 > maior){
    maior = n2
}

if(n3 > maior){
    maior = n3
}

console.log(maior)