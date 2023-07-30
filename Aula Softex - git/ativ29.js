var gastos = {
    receitas : [10, 50, 62],
    despesas : [50, 5, 10],
}

var saldo

const calculo = (receitas, despesas) => {
    let r_total = 0
    let d_total = 0
    for(let i = 0; i < receitas.length; i += 1){
        r_total += receitas[i]
    }
    for(let i = 0; i < despesas.length; i += 1){
        d_total += despesas[i]
    }
    saldo = r_total - d_total
    if(saldo >= 0){
        return 'positivo'
    }else{
        return 'negativo'
    }
}

console.log(`Saldo: ${calculo(gastos.receitas, gastos.despesas)}, Saldo Final: R$${saldo}`)