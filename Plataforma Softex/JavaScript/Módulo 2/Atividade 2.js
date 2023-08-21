/*Deve ser executado no programiz*/

console.log("<<<<TABELA DE OPERAÇÕES>>>>>")
console.log(" + para soma")
console.log(" - para subtração")
console.log(" * para multiplicação")
console.log(" / para divisão")
console.log("---------------------------------")

console.log("Digite primeiro o primeiro valor da operação, depois o símbolo da operação e em seguida o segundo valor da operação")

let n1 = Number(prompt(">>"))
let op = prompt(">>")
let n2 = Number(prompt(">>"))

switch(op){
    case "+":
        console.log(`${n1} + ${n2} = ${n1+n2}`)
        break
    case "-":
        console.log(`${n1} - ${n2} = ${n1-n2}`)
        break
    case "*":
        console.log(`${n1} * ${n2} = ${n1*n2}`)
        break        
    case "/":
        console.log(`${n1} / ${n2} = ${Math.floor(n1/n2)}, com resto ${n1%n2}`)
        break
}