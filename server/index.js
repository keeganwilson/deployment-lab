const express = require('express')
const path = require('path')

const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../styles/index.html'))
})

app.use(express.static("styles"))

const port = process.env.PORT || 4005

app.listen(port, () => {console.log(`Listening on port ${port}`)})