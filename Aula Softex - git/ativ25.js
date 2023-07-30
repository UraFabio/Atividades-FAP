var pessoa = {
    nome: 'Fabio Seijii Ura',
    idade: '22',
    sexo: 'masculino',
    telefone: '87981798837',
    frase:()=>{
        return `Olá! Meu nome é ${pessoa.nome}, tenho ${pessoa.idade} anos, sou do sexo ${pessoa.sexo} e meu telefone é ${pessoa.telefone}`
    }
}

console.log(pessoa.frase())