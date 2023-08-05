/*Deve ser compilador do programiz para a função prompt ser reconhecida */
let vetorA = []

console.log('Digite 20 elementos: ')

for(let i = 0; i < 20; i ++){
    let a = prompt('Digite: ')
    vetorA.push(a)
}

let vetorB = vetorA.reverse()

console.log(vetorB)