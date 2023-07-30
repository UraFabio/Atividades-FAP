var peso, altura, imc
const res = document.getElementById("resultado")


function pegarValores(){
    altura = document.getElementById("campoAltura").value
    peso = document.getElementById("campoPeso").value
    if((altura <= 0 || peso <= 0)||(altura == null || peso == null)||(altura >= 3 )){
        res.innerHTML = 'Digite um valor válido'
    }else{
        imc = peso/(altura*altura)
        imc = imc.toFixed(2)

        if(imc < 18.5){
            res.innerHTML = `Seu IMC = ${imc} MAGREZA`
        }else if(imc >= 18.5 && imc < 25){
            res.innerHTML = `Seu IMC = ${imc} NORMAL`
        }else if(imc >= 25 && imc < 30){
            res.innerHTML = `Seu IMC = ${imc} SOBREPESO`
        }else if(imc >= 30 && imc < 40){
            res.innerHTML = `Seu IMC = ${imc} OBESIDADE`
        }else if(imc > 40){
            res.innerHTML = `Seu IMC = ${imc} OBESIDADE GRAVE`
        }
    }
}
