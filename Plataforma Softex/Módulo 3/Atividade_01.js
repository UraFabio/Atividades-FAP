let nomes = ['Fabio', 'Rafael', 'Beatriz', 'Nelson', 'Diogo', 'Marcos', 'Fernanda', 'Michel', 'Victor', 'Lucas']
let idades = [22, 12, 24, 51, 35, 43, 26, 21, 21, 20]
let cores_favoritas = ['preto', 'azul', 'rosa', 'vermelho', 'verde', 'cinza', 'amarelo', 'roxo', 'lilás', 'branco']

console.log(nomes)
console.log(idades)
console.log(cores_favoritas)

idades.splice(0, 1, 23)
cores_favoritas.splice(1, 1, 'ciano')

console.log(nomes)
console.log(idades)
console.log(cores_favoritas)