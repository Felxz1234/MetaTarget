const express = require('express')
const app = express()
const PORT = 5000
const rotas = require('./rotas/rotas')

app.use(express.json())
app.use(rotas)


require('./dbconfig')

app.listen(PORT,(error)=>{
    if(error){
        console.log(error)
    }else{
        console.log('server running in port 5000')
    }
})





