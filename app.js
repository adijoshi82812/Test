const createRequest = require('./server')

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.EA_PORT || 8080

app.use(bodyParser.json())

app.post('/', async (req, res) => {
    // console.log('POST Data: ', req.body)
    createRequest.handlerv2(req,res);
})

app.listen(port, () => console.log(`Listening on port ${port}!`))