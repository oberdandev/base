const express = require('express')
const path = require('path')
const dir = __dirname

const app = express() 

const port = process.env.PORT || 3000

app.use('/assets', express.static(dir + '/src/assets'))

app.use('/pages', express.static(dir + '/src/pages'))


app.get('/', (req, res)=>{
    res.sendFile(path.join(dir + "/pages/index.html"))    
})

app.get('/apps', (req,res)=>{
    res.sendFile(path.join(__dirname + '/pages/apps.html'))
})

app.listen(port, () => console.info('App running at localhost:' + port))