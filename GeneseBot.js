const commands = require('./src/commands')
const events = require('./src/events')

module.exports = () => {
  const bot = require('./init/bot')

  commands({ bot })
  events({ bot })

  bot.launch()
    .then(() => {
      console.log('Bot is listening on Telegram!')
    })
    .catch(error => {
      console.error(error)
    })
}
