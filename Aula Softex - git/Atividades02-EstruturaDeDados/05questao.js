/*Deve ser compilador do programiz para a função prompt ser reconhecida */
const numbers = [1, 2, 3, 4, 5, 8, 9, 10, 14]

numbers.unshift(-1)
console.log(numbers)

numbers.pop()
console.log(numbers)

for(let i = 0; i < numbers.length;){
    if(numbers[i] == 5 || numbers[i] == 8 || numbers[i] == 9){
        numbers.splice(i, 1)
    }else{
        i++
    }
}
console.log(numbers)

numbers.push(50, 60, 70)
console.log(numbers)

numbers.shift()
console.log(numbers)