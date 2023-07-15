let salario = Number(prompt("Digite seu salario: "))
let aumento
let novoSalario

if(salario <= 280){
    aumento = 20/100
    novoSalario = salario + salario*aumento
}else if((salario > 280)&&(salario <= 700)){
    aumento = 15/100
    novoSalario = salario + salario*aumento
}else if((salario>700)&&(salario<1500)){
    aumento = 10/100
    novoSalario = salario + salario*aumento
}else{
    aumento = 5/100
    novoSalario = salario+salario*aumento
}

console.log("Salario antes do reajuste: "+salario)
console.log("Percentual de aumento: "+(aumento*100)+"%")
console.log("Valor do aumento: "+(novoSalario-salario))
console.log("Novo salario: "+ novoSalario)