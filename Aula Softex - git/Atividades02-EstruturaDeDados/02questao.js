/*Deve ser compilador do programiz para a função prompt ser reconhecida */

let arrayA = []

console.log('Digite os 5 elementos do array A: ')

for(let i = 0; i< 5; i ++){
    let a = Number(prompt('Digite: ')) 
    arrayA.push(a)
}

let soma = arrayA.reduce((acumulador, x) => x%2!=0? acumulador+x:acumulador,0)

console.log(soma)