const Telegraf = require('telegraf')

const { TOKEN } = process.env

const bot = new Telegraf(TOKEN)

module.exports = bot
