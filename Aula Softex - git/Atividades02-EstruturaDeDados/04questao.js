/*Deve ser compilador do programiz para a função prompt ser reconhecida */
const estudantes = [
    { nome: 'José', nota: 5.7 },    
    { nome: 'Maria', nota: 4.8 },    
    { nome: 'Paula', nota: 7.5 },    
    { nome: 'Eustáquio', nota: 6.7 }
]

let media = estudantes.reduce((acumulador, x) => acumulador + x.nota,0)/estudantes.length

console.log(media)