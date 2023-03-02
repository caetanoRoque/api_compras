//criando o servidor
const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const port = 3000

const compras = []

//definindo o tipo de dado
app.use(bodyParser.json())
//mapeando os endpoints
app.get("/", (req, res) => {
    res.status(200).send("Bem-vindo ao meu servidor Express!")
})

app.get("/compras", (req, res) => {
    res.status(200).send(JSON.stringify(compras))
})


app.post("/cadastrar-compra", (req, res) => {
    compras.push(req.body)
    res.status(200).send("Post executado")
})

app.delete("/deletar-compra/:id", (req, res) => {
    let id = req.params.id
    for(i of compras){
        if(i.id==id){
            let index=compras.indexOf(i)
            compras.splice(index,1)
        }
    }

    res.status(200).send("Delete executado")
})

app.get("/valor-total", (req, res) => {
    let valorTotal=0
    for(i of compras){
        valorTotal+=i.preco
    }
    res.status(200).send(`O valor total é ${JSON.stringify(valorTotal)}`)
})
//escutar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})