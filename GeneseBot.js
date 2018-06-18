module.exports = () => {
  const bot = require('./src/bot')
  const log = require('./src/log')
  const response = require('./src/response')  

  bot.onText(/\/bitcoin/, async (msg) => {
    const chatId = msg.chat.id
    const resp = await response.bitcoin()
  
    bot.sendMessage(chatId, resp)
      .then(() => {
        log.request('bitcoin')
      })
  })
  
  bot.onText(/\/cep (.+)/, async (msg, match) => {
    const chatId = msg.chat.id
    const resp = await response.cep(match[1])
  
    bot.sendMessage(chatId, resp)
      .then(() => {
        log.request('cep')
      })
  })
  
  bot.onText(/\/date/, (msg) => {
    const chatId = msg.chat.id
    const resp = response.date()
  
    bot.sendMessage(chatId, resp)
      .then(() => {
        log.request('date')
      })
  })

  bot.onText(/\/echo (.+)/, (msg, match) => {
    const chatId = msg.chat.id
    const resp = response.echo(match)
  
    bot.sendMessage(chatId, resp)
      .then(() => {
        log.request('echo')
      })
  })
  
  bot.onText(/\/help/, (msg) => {
    const chatId = msg.chat.id
    const resp = response.help
  
    bot.sendMessage(chatId, resp)
      .then(() => {
        log.request('help')
      })
  })
  
  bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id
    const resp = response.start(msg)

    bot.sendPhoto(chatId, resp.profile, {caption: resp.message})
      .then(() => {
        log.request('start')
      })
  })
}
