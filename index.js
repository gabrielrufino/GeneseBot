const bot = require('./src/bot')
const response = require('./src/response')

bot.onText(/\/bitcoin/, (msg) => {
  const chatId = msg.chat.id
  const resp = response.bitcoin()

  resp
    .then((res) => {
      bot.sendMessage(chatId, JSON.stringify(res.data))
    })
})

bot.onText(/\/cep (.+)/, (msg, match) => {
  const chatId = msg.chat.id
  const resp = response.cep(match[1])

  resp
    .then((res) => {
      bot.sendMessage(chatId, JSON.stringify(res.data))
    })
})

bot.onText(/\/date/, (msg) => {
  const chatId = msg.chat.id
  const resp = response.date()

  bot.sendMessage(chatId, resp)
})

bot.onText(/\/echo (.+)/, (msg, match) => {
  const chatId = msg.chat.id
  const resp = response.echo(match)

  bot.sendMessage(chatId, resp)
})

bot.onText(/\/help/, (msg) => {
  const chatId = msg.chat.id
  const resp = response.help

  bot.sendMessage(chatId, resp)
})

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id
  const resp = response.start

  bot.sendMessage(chatId, resp)
})
