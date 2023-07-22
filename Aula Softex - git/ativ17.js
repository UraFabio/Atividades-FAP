function numero_invertido(numero){
    let invertido = numero.split('').reverse()
    console.log(invertido.join(''))
}

numero = prompt("Digite o numero: ")

numero_invertido(numero)