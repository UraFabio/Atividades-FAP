/*
const n1 = document.querySelector('#n1')
const n2 = document.querySelector('#n2')
const resultado = document.querySelector('#resultado')

function somar(){
    let soma = Number(n1.value) + Number(n2.value)
    resultado.innerHTML = `Resultado: ${soma}`
}
*/

const numeroSecreto = 57


let tentativas = 0


function testar(){
    const numero = document.querySelector('#input').value
    tentativas ++
    if(numero < numeroSecreto){
        window.alert(`O número secreto é MAIOR\nTentativas: ${tentativas}`)
        
    }else if(numero > numeroSecreto){
        window.alert(`O número secreto é MENOR\nTentativas: ${tentativas}`)
    }else if(numero == numeroSecreto){
        window.alert(`Você acertou!!\nTentativas: ${tentativas}`)
        tentativas = 0
    }   
}



