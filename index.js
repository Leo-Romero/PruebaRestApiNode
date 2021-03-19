require('dotenv').config
const express = require('express')
const app = express()

const port = process.env.PORT || 3000

app.get('/', function(req, res) {
    const users = [
        {
            id: 1,
            name: "Juan"
        },
        {
            id: 2,
            name: "Pedro"
        },
        {
            id: 3,
            name: "Jose"
        }
    ]
    res.json(users)
})
app.post('/', function(req, res) {
    const result = {
        message: "Usuario creado"
    }
    res.status(201).json(result)
})
app.put('/', function(req, res) {
    const result = {
        message: "Usuario modificado"
    }
    res.json(result)
})
app.patch('/', function(req, res) {
    const result = {
        message: "Usuario modificado con patch"
    }
    res.json(result)
})
app.delete('/', function(req, res) {
    const result = {
        message: "Usuario eliminado"
    }
    res.json(result)
})

app.listen(port, ()=>{
    console.log(`Servidor escuchando en el puerto ${port}`)
})