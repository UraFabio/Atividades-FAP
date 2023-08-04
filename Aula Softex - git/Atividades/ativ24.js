let codigo = Number(prompt('Digite o código do produto: '))

switch(codigo){
    case 1:
        console.log('Origem: SUL')
        break
    case 2:
        console.log('Origem: NORTE')
        break
    case 3:
        console.log('Origem: LESTE')
        break
    case 4:
        console.log('Origem: OESTE')
        break
    case 5:
    case 6:
        console.log('Origem: NORDESTE')
        break
    case 7:
    case 8:
    case 9:
        console.log('Origem: SUDESTE')
        break
    case 10:
        console.log('Origem: CENTRO-OESTE')
        break
    case 11:
        console.log('Origem: NOROESTE')
        break
    default:
        console.log('Origem: IMPORTADO')
        break
}