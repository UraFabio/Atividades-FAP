/*Deve ser compilador do programiz para a função prompt ser reconhecida */

let vetorA =[]

console.log('Digites os 10 valores do vetor A: ')

for(let i = 0; i < 10; i ++){
    let a = Number(prompt('>>>'))
    vetorA.push(a)
}

let vetorB = vetorA.map((x) => {
    return vetorA.indexOf(x)%2==0?x*5:x+5
})

console.log(vetorB)