let contador = 0

const contadorElemento = document.getElementById('contador')

var valorInput = 1

function incrementar(){
    contador += Number(valorInput)
    contadorElemento.innerHTML = contador
}
function decrementar(){
    contador -= Number(valorInput)
    contadorElemento.innerHTML = contador
}

function resetar(){
    contador = 0
    valorInput = 1
    contadorElemento.innerHTML = 0
}

function capturarInput() {
    valorInput = document.getElementById("campoInput").value
  }
  