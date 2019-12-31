const commands = require('./src/commands')

module.exports = () => {
  const bot = require('./init/bot')

  commands({ bot })

  bot.launch()
    .then(() => {
      console.log('Bot is listening on Telegram!')
    })
    .catch(error => {
      console.error(error)
    })
}
