/*
deve ser executado no programiz
*/

console.log("Vamos fazer uma conta de divisão.")

let numero1=prompt("Digite o dividendo: ")
let numero2=prompt("Digite o divisor: ")

try{
    let resultado=numero1/numero2
    console.log(`${numero}/${numero2}=${resultado}`)
}catch(error){
    console.log("ERRO: "+error.message)
}finally{
    console.log("Execução finalizada")
}