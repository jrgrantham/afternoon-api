require('dotenv').config()

const express = require('express')
const cors = require('cors')

const app = express()
const port = process.env.port

const apiInfo = [
  { id: 1, text: 'cool thing 1'},
  { id: 2, text: 'cool thing 2'}
]

app.use(express.static(__dirname + '/client/build'))
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client/build/indexedDB.html')
})

app.get('/api/info', (req, res) => {
  res.json(apiInfo)
})

app.listen(port, () => {
  console.log('listening on ' + port)
})