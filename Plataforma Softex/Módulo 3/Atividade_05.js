let array = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7]

let procurar = 20

for(let i = 0; i < array.length; i++){
    if(procurar == array[i]){
        console.log(`Número encontrado no índice ${i}.`)
    }
}

/* 
A melhor opção é usar a busca linear, pois por se tratar de uma array pequena,
 o tempo de execução não será longo, e caso fosse usar a busca binária, primeiro teria que  ordena-la,
 o que consumiria mais tempo, se tornando inviável
*/