var pessoa = {
    nome: 'Fabio Seijii Ura',
    idade: '22',
    sexo: 'masculino',
    telefone: '87981798837',
    nomeCompleto:()=>{
        return `Olá, meu nome compelto é ${this.nome}`
    }
}
console.log(pessoa.nomeCompleto())