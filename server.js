const express = require('express');
const app = express();
const PORT = 8000;

const dataSet = {
    '21 savage': {
        'age': 29,
        'birthName': 'Sheyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England',
    },
    'unknown':{
        'age': 0,
        'birthName': 'unknown',
        'birthLocation': 'unknown',
    },
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api', (req, res) => {
    res.json(dataSet)
})

app.get('/api/:name', (req, res) => {
    const dataName = req.params.name.toLowerCase() // this takes everything behind the ':' in the url, makes it lowercase, and assigns it to a variable
    if ( dataSet[dataName] ){
        res.json(dataSet[dataName])
    }else{
        res.json(dataSet.unknown)
    }
})

app.listen(PORT, ()=>{
    console.log(`The server is now running on PORT:${PORT}`)
})