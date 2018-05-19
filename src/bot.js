const TelegramBot = require('node-telegram-bot-api')
const token = '540565063:AAGAS11IsUjQ1KkTC1doRhvWmR18Aq0Xtl4'

const bot = new TelegramBot(token, {polling: true})

module.exports = bot
