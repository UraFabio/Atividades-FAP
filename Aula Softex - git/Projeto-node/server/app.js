const express = require('express')
const app = express()
const mysql2 = require('mysql2')
const ejs = require('ejs')
const bodyParser = require('body-parser')

app.set('view engine','ejs')
app.use(bodyParser.urlencoded({extended:true}))

const db = mysql2.createConnection({
    host:'localhost',
    user:'root',
    password:'Abracadabra123@',
    database:'empresa-fap'
})

db.connect((error)=>{
    if(error){
        console.log('Erro ao conectar com o banco de dados:'+error)
    }else{
        console.log('Banco de dados conectado com sucesso')
    }
})

app.get("/formulario",(req, res)=>{
    res.render('formulario')
} )

app.post("/cadastrar", (req, res)=>{
    const {nome, preco} = req.body
    console.log(nome, preco)

    const query = 'INSERT INTO produto (nome,preco) VALUES (?,?)'
    db.query(query, [nome, preco],(err)=>{
        if(err){
            console.log("ERRO ao inserir no banco de dados"+err)
        }else{
            res.send("Produto cadastrado com sucesso")
        }
    })
})



app.listen(3003, ()=>{
    console.log("Servidor rodando...")
})