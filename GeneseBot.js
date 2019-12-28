module.exports = () => {
  const bot = require('./init/bot')
  const response = require('./src/response')

  bot.command('bitcoin', async context => {
    const resp = await response.bitcoin()

    context.reply(resp)
  })

  bot.command('cep', async context => {
    const cep = context.update.message.text.split(' ')[1]
    const resp = await response.cep(cep)

    context.reply(resp)
  })

  bot.command('date', context => {
    const resp = response.date()

    context.reply(resp)
  })

  bot.command('echo', context => {
    const text = context.update.message.text.split(' ').slice(1).join(' ')
    const resp = text

    context.reply(resp)
  })

  bot.command('fib', async context => {
    const number = context.update.message.text.split(' ')[1]
    const resp = response.fib(Number(number))

    context.reply(resp)
  })

  bot.command('github', async context => {
    const user = context.update.message.text.split(' ')[1]

    const resp = await response.github(user)
    console.log(resp)
    context.replyWithPhoto({
      url: resp.image
    }, {
      caption: resp.message
    })
  })

  bot.command('help', context => {
    const resp = response.help

    context.reply(resp)
  })

  bot.start(context => {
    const resp = response.start()

    context.reply(resp)
  })

  bot.launch()
}
