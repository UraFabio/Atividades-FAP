function area_triangulo(base,altura){
    return base*altura/2
}

let base = Number(prompt("Digite o tamanho da base do triangulo: "))
let altura = Number(prompt("Digite o tamanho da altura do triangulo: ")) 

console.log("Area = "+area_triangulo(base,altura)+" u.a.")