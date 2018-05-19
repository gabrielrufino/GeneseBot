'use strict'

const request = require('request')
const TelegramBot = require('node-telegram-bot-api')

const token = '540565063:AAGAS11IsUjQ1KkTC1doRhvWmR18Aq0Xtl4'

const bot = new TelegramBot(token, {polling: true})

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
