const fs = require('fs')
const express = require('express')
const app = express()

app.get('/hospitals', (req, res) => {
    const stat = fs.statSync('data/hospitals.json');

    res.writeHead(200, {
        'Content-Type': 'text/json',
        'Content-Length': stat.size
    })

    const readStream = fs.createReadStream('data/hospitals.json');
    readStream.pipe(res)
})

app.listen(3000)