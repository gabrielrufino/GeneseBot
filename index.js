const bot = require('./src/bot')
const response = require('./src/response')

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id
  const resp = response.start

  bot.sendMessage(chatId, resp)
})

bot.onText(/\/help/, (msg) => {
  const chatId = msg.chat.id
  const resp = response.help

  bot.sendMessage(chatId, resp)
})

bot.onText(/\/date/, (msg) => {
  const chatId = msg.chat.id
  const resp = response.date()

  bot.sendMessage(chatId, resp)
})

bot.onText(/\/bitcoin/, (msg) => {
  const chatId = msg.chat.id
  const resp = response.bitcoin()

  resp
    .then((response) => {
      bot.sendMessage(chatId, JSON.stringify(response.data))
    })
})

bot.onText(/\/echo (.+)/, (msg, match) => {
  const chatId = msg.chat.id
  const resp = response.echo(match)

  bot.sendMessage(chatId, resp)
})
