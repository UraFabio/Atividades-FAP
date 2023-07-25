let codigo = Number(prompt('Digite o código do produto: '))

if(codigo == 1){
    console.log('Origem: SUL')
}else if(codigo == 2){
    console.log('Origem: NORTE')
}else if(codigo == 3){
    console.log('Origem: LESTE')
}else if(codigo == 4){
    console.log('Origem: OESTE')
}else if(codigo == 5 || codigo == 6){
    console.log('Origem: NORDESTE')
}else if(codigo == 7 || codigo == 8 || codigo == 9){
    console.log('Origem: SUDESTE')
}else if(codigo == 10){
    console.log('Origem: CENTRO-OESTE')
}else if(codigo == 11){
    console.log('Origem: NOROESTE')
}else{
    console.log('Origem: IMPORTADO')
}