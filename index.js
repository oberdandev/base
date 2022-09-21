const express = require('express')
const path = require('path')
const dir = __dirname

const app = express() 

const port = process.env.PORT || 3000

app.get('/', (req, res)=>{
    res.sendFile(path.join(dir + "/src/index.html"))    
})


app.listen(port, () => console.info('App running at localhost:' + port))