function menu(){
    console.log("Testando as funcoes, somando os numeros 25 e 60.")

}

let n1 = '25' 
let n2 = '60' 
let op = '+' 

function tradicional(op, n1, n2){
    return eval(`${n1}${op}${n2}`)
}

const funcaoArrow = (op, n1, n2) => eval(`${n1}${op}${n2}`);

console.log(`Usando a funcao tradicional: ${tradicional(op, n1, n2)}`)

console.log(`Usando a arrow function: ${funcaoArrow(op, n1, n2)}`)