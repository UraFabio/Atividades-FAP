let n = Number(prompt("Digite um número: "))

if(n > 7 || n < 1){
    console.log("Número inválido, digite um número entre 1 e 7.")
}else{
    if(n == 1){
        console.log("Domingo")
    }else if(n == 2){
        console.log("Segunda")
    }else if(n == 3){
        console.log("Terça")
    }else if(n == 4){
        console.log("Quarta")
    }else if(n == 5){
        console.log("Quinta")
    }else if(n == 6){
        console.log("Sexta")
    }else if(n == 7){
        console.log("Sábado")
    }
}