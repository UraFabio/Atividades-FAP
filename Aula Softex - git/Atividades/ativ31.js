var dados_bancarios = {
    banco: 'BNB',
    agencia: 256,
    conta: '25-2256',
    tipo: 'corrente',
    mostraDados: ()=>{
        console.log(`Banco: ${dados_bancarios.banco}
Agencia: ${dados_bancarios.agencia}
Conta: ${dados_bancarios.conta}
Tipo: ${dados_bancarios.tipo}`)
    }
}
dados_bancarios.mostraDados()