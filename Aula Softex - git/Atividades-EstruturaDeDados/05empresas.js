const empresas = [
    {nome:'Samsumg', valorDeMercado: 50 ,CEO: 'Kim Hyun Suk', anoDeCriacao: 1938},
    {nome:'Microsoft', valorDeMercado: 415,CEO: 'Satya Nadella', anoDeCriacao: 1975},
    {nome:'Intel', valorDeMercado: 117,CEO: 'Brian Krzanich', anoDeCriacao: 1968},
    {nome:'Facebook', valorDeMercado: 383,CEO: 'Mark Zuckerberg', anoDeCriacao: 2004},
    {nome:'Spotify', valorDeMercado: 30,CEO: 'Daniel Ek', anoDeCriacao: 2006 },
    {nome:'Apple', valorDeMercado: 845,CEO: 'Tim Cook', anoDeCriacao: 1976},
]

const depoisDe2000 = empresas.filter((empresa) => empresa.anoDeCriacao > 2000)

console.log(`Empresa criadas depois do ano 2000:`)
console.log(depoisDe2000)

empresas.forEach((empresa) => {
    console.log(`Empresa: ${empresa.nome}, CEO: ${empresa.CEO}`)
})

const valorTotal = empresas.reduce((acumulador, empresa ) => acumulador + empresa.valorDeMercado,0)

console.log(valorTotal)
       
  