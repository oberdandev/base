const express = require('express')
const path = require('path')
const dir = __dirname

const app = express() 

const port = process.env.PORT || 3000

app.use('/assets', express.static(dir + '/assets'))


app.get('/', (req, res)=>{
    res.sendFile(path.join(dir + "/src/index.html"))    
})

app.get('/apps', (req,res)=>{
    res.sendFile(path.join(__dirname + '/src/apps.html'))
})

app.listen(port, () => console.info('App running at localhost:' + port))