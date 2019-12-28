const express = require('express')

const app = express()

app.get('/', (_, res) => {
  return res.json({
    alive: true
  })
})

const { API_PORT } = process.env

app.listen(API_PORT, () => {
  console.log('API is alive!')
})
