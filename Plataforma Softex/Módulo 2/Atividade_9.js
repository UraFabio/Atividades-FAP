/*O código deve ser rodado no compilador do programiz para ser executado sem erro*/ 

var resultado = {
    candidato_X: 0,
    candidato_Y: 0,
    candidato_Z: 0,
    branco: 0,
    nulo: 0
}

function mostrarCandidatos() {
    console.log('----------CANDIDATOS----------')
    console.log('Candidato X: 889')
    console.log('Candidato Y: 847')
    console.log('Candidato Z: 515')
    console.log('Branco: 0')
    console.log('-------------------------------')
}

function mostrarResultado() {
    console.log('----------Resultado Geral----------')
    console.log(`Candidato X: ${resultado.candidato_X}`)
    console.log(`Candidato Y: ${resultado.candidato_Y}`)
    console.log(`Candidato Z: ${resultado.candidato_Z}`)
    console.log(`Branco: ${resultado.branco}`)
    console.log(`Nulo: ${resultado.nulo}`)
    console.log('-----------------------------------')
}

function mostrarVencedor(){
    console.log('-----VENCEDOR------')
    if(resultado.candidato_X > resultado.candidato_Y && resultado.candidato_X > resultado.candidato_Z){
        console.log(`Candidato X, com ${resultado.candidato_X}`)
    }else if(resultado.candidato_Y > resultado.candidato_X && resultado.candidato_Y > resultado.candidato_Z){
        console.log(`Candidato Y, com ${resultado.candidato_Y}`)
    }else if(resultado.candidato_Z > resultado.candidato_X && resultado.candidato_Z > resultado.candidato_Y){
        console.log(`Candidato Z, com ${resultado.candidato_Z}`)
    }else if(resultado.candidato_X == resultado.candidato_Y && resultado.candidato_X == resultado.candidato_Z){
        console.log('EMPATE ENTRE candidato X, candidato Y e candidato Z')
    }else if(resultado.candidato_X == resultado.candidato_Y){
        console.log('EMPATE ENTRE candiato X e candidatoY')
    }else if(resultado.candidato_X == resultado.candidato_Z){
        console.log('EMPATE ENTRE candidato X e candidato Z')
    }else if(resultado.candidato_Y ==  resultado.candidato_Z){
        console.log('EMPATE ENTRE candidato Y e candidato Z')
    }
    console.log('--------------------')
}

var voto

while(true){
    mostrarCandidatos()
    try{
        voto = prompt('>>>Escolha seu voto: ')
        if(voto === ''){
            voto = null
        }else{
            voto = Number(voto)
        }
        if(isNaN(voto)){
            throw new Error('')
        }
    }catch(error){
        console.error('Digite apenas números, tente novamente:')
        continue
    }

    switch(voto){
        case 0:
            resultado.branco += 1
            break
        case 889:
            resultado.candidato_X += 1
            break
        case 847:
            resultado.candidato_Y += 1
            break
        case 515:
            resultado.candidato_Z += 1
            break
        default:
            resultado.nulo += 1
            break
    }
    while(true){
        var r = prompt('Deseja finalizar a votação? (S ou N): ')
        if(r.toUpperCase() != 'S' && r.toUpperCase() != 'N'){
            console.log('Digite uma opção válida')
            continue
        }
        break
    }
    if(r.toUpperCase() == 'S'){
        break
    }else{
        continue
    }
}
mostrarVencedor()
mostrarResultado()