const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    '21 savage': {
    'birthName': 'Sheyaa Bin Abraham-Joseph',
    'birthLocation': 'London, England',
    'age': 29,
    },
    'chance the rapper':{
    'birthName': 'Chancelor Bennett',
    'birthLocation': 'Chicago, Illinois',
    'age': 29
    },
    'unknown':{
        'age': 0,
        'birthName': 'unknown',
        'birthLocation': 'unkown'
    }
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request,response)=>{
    const rapperName = request.params.name.toLowerCase()
    if(rappers[rapperName]){
        response.json(rappers[rapperName])
    } else {
        response.json(rappers['unknown'])
    }
})

app.listen(PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`)
})