let comprimento = Number(prompt('Digite o comprimento: '))
let altura = Number(prompt('Digite o altura: '))
let largura = Number(prompt('Digite o largura: '))

let caixas = (comprimento*altura + largura*altura) / 1.5

console.log(`Irá precisar de ${caixas} caixas de azulejo.`)