let taxa_de_juros = 1/100

const resposta = document.querySelector('#resposta')

function calcular(){
    let nome = document.querySelector('#nome').value.toUpperCase()

    const aporte_mensal = document.querySelector('#mensalidade').value
    const meses = document.querySelector('#meses').value

    let montante_final = (aporte_mensal * (((1 + taxa_de_juros)**meses - 1)/taxa_de_juros))
    resposta.innerHTML = `<strong>Olá <span class="span-nome">${nome}</span>, juntando <span class="span-numero">R$${aporte_mensal}</span> todo mês,<br> você terá <span class="span-numero">R$${montante_final.toFixed(2)}</span> em ${meses} meses</strong>`
}