function montante_final(capital, meses, juros){
    return capital*((1+juros)**meses)
}

let capital = Number(prompt("Informe o capital inicial: "))
let meses = Number(prompt("Informe o tempo em meses que ficará investido: "))
let juros = Number(prompt("Informe a taxa de juros mensal: "))

console.log(montante_final(capital, meses, juros))