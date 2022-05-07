const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')

app.get('/', (req, res) => {
    res.send('Hello World!')
    console.log(`Example app listening on port`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
