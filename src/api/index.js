const express = require('express')

const app = express()

app.get('/', (_, res) => {
  return res.json({
    alive: true
  })
})

const { PORT } = process.env

app.listen(PORT, () => {
  console.log(`API is listening on ${PORT}!`)
})
