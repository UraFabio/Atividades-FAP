/*Deve ser executado no programiz*/

function codigo1(){
    console.log("Digite suas 3 notas: ")
    let n1 = Number(prompt(">>"))
    let n2 = Number(prompt(">>"))
    let n3 = Number(prompt(">>"))
    
    return (n1+n2+n3)/3 <= 7?  "reprovado":  "aprovado"
}

function codigo2(){
    console.log("Digite suas 2 notas: ")
    let n1 = Number(prompt(">>"))
    let n2 = Number(prompt(">>"))
    
    let nota_minima = 21 - (n1+n2)
    
    return `nota mínima necessária: ${nota_minima}`
}


console.log(codigo1())

console.log(codigo2())

