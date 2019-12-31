const router = require('./router')

const commands = ({ bot }) => {
  router.forEach(route => {
    bot.command(route.command, route.handler)
  })
}

module.exports = commands
