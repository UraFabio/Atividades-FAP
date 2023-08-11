/*Deve ser executado no programiz*/ 

function cadastrar(){
    console.log('\0\n\0\n\0\n\0')
    
    console.log('-------INICIO DO CADASTRO-------')
    
    let nome, preco
    
    nome = prompt('Digite o nome do produto: ')
    
    preco = Number(prompt('Digite o preco do produto: '))
    
    let produto1 = new Produtos(nome, preco)
    
    estoque.push(produto1)
    
    console.log('-------FIM DO CADASTRO-------')
}

function excluir(){
    console.log('.\n.\n.\n.')
    console.log('-------EXCLUINDO-------')
    let excluir = prompt('Digite o NOME do produto que deseja excluir: ')
    for(let i = 0; i < estoque.length; i ++){
        if((estoque[i].nome).toUpperCase() == excluir.toUpperCase()){
            estoque.splice(i, 1)
            console.log('Produto excluido com sucesso')
            console.log('-------------------------------')
            return 1
        }
        console.log('Produto não encontrado.')
        console.log('-------------------------------------')
        return 0
    }
    
}

function mostrar(){
    console.log('.\n.\n.\n.')
    console.log('--------------------------MOSTANDO PRODUTO(S)---------------------')
    while(true){
        let choice = prompt('Digite 1 para mostar todo o estoque ou 2 para escolher um produto: ')
        if(choice == 1){
            console.log(estoque)
            console.log('------------------------------------------------')
            return 1
        }else if(choice == 2){
            let nomeProduto = prompt('Digite o nome do produto: ').toUpperCase()
            for(let i = 0; i < estoque.length; i ++){
                if(estoque[i].nome.toUpperCase() == nomeProduto){
                console.log(estoque[i])
                console.log('---------------------------------------------------')
                return 1
                }
            }
                console.log('Produto não encontrado.')
        }else{
            console.log('Escolha uma opção válida.')
        }
    }
}

class Produtos{
    constructor(nome, preco){
        this.nome = nome
        this.preco = preco
    }
}

var estoque = []

while(true){
    console.log('.\n.\n.\n.')
    console.log('Escolha uma opção: ')
    console.log('1 para cadastrar produto')
    console.log('2 para excluir produto')
    console.log('3 para mostrar produto(s)')
    console.log('4 para sair')
    
    let escolha = prompt('>>')
    
    switch(escolha){
        case '1':
            cadastrar()
            break
        case '2':
            excluir()
            break
        case '3':
            mostrar()
            break
        case '4':
        default:
            return 0
    }
}