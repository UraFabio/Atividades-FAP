let funcionarios = ['FABIO','JOAO','CARLOS','VICTOR','BEATRIZ','RAFAEL','NELSON','MATHEUS','LUAN','MICHEL']

let resposta = document.querySelector('#resposta')


function checarFuncionario(){
    let nome = document.querySelector('#id-input').value
    nome = nome.toUpperCase()

    if(funcionarios.includes(nome)){
        resposta.innerHTML = 'Usuário encontrado'
    
    }else{
        resposta.innerHTML = 'Usuário não encontrado'
    }
}

