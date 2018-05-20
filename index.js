const request = require('request')
const bot = require('./src/bot')

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id
  const resp = 'Wellcome! I\'m GeneseBot, a chatbot ready to the hard work :D'

  bot.sendMessage(chatId, resp)
})

bot.onText(/\/help/, (msg) => {
  const chatId = msg.chat.id
  const resp = 'How can i help you?'

  bot.sendMessage(chatId, resp)
})

bot.onText(/\/date/, (msg) => {
  const chatId = msg.chat.id
  const resp = Date()

  bot.sendMessage(chatId, resp)
})

bot.onText(/\/bitcoin/, (msg) => {
  const chatId = msg.chat.id

  request('https://www.mercadobitcoin.net/api/BTC/ticker/', (error, response, body) => {
    if (!error) {
      const resp = body.toString()
      bot.sendMessage(chatId, resp)
    }
  })
})

bot.onText(/\/echo (.+)/, (msg, match) => {
  const chatId = msg.chat.id
  const resp = match[1]

  bot.sendMessage(chatId, resp)
})
