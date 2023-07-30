var peso, altura, imc
const res = document.getElementById("resultado")


function pegarValores(){
    altura = document.getElementById("campoAltura").value
    peso = document.getElementById("campoPeso").value
    imc = peso/(altura*altura)
    console.log(imc)
    imc = imc.toFixed(2)

    if(imc < 18.5){
        res.innerHTML = `IMC = ${imc} MAGREZA`
    }else if(imc >= 18.5 && imc < 25){
        res.innerHTML = `IMC = ${imc} NORMAL`
    }else if(imc >= 25 && imc < 30){
        res.innerHTML = `IMC = ${imc} SOBREPESO`
    }else if(imc >= 30 && imc < 40){
        res.innerHTML = `IMC = ${imc} OBESIDADE`
    }else if(imc > 40){
        res.innerHTML = `IMC = ${imc} OBESIDADE GRAVE`
    }

    
}
