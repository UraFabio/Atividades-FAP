let animais = [
    ['macaco', 'macaco-prego', '6 anos'],
    ['cachorro', 'Husky', '5 anos'],
    ['cobra', 'cobra-rei', '12 anos'],
    ['rinoceronte', 'rinoceronte-branco', '25 anos']
]

for(let animal = 0; animal < animais.length; animal ++){
    for(let caracteristicas = 0; caracteristicas < animais[animal].length; caracteristicas ++){
        console.log(animais[animal][caracteristicas])
        
    }
    console.log(' ')
}