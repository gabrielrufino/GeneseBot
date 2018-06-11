module.exports = () => {  
  const bot = require('./src/bot')
  const response = require('./src/response')
  
  bot.onText(/\/bitcoin/, async (msg) => {
    const chatId = msg.chat.id
    const resp = await response.bitcoin()
  
    bot.sendMessage(chatId, resp)
  })
  
  bot.onText(/\/cep (.+)/, async (msg, match) => {
    const chatId = msg.chat.id
    const resp = await response.cep(match[1])
  
    bot.sendMessage(chatId, resp)
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
  
  bot.onText(/\/start/, async (msg) => {
    const chatId = msg.chat.id
    const resp = response.start
  
    await bot.sendPhoto(chatId, resp.profile)
    bot.sendMessage(chatId, resp.message)
  })
}
