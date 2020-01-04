const audio = require('./audio')
const poll = require('./poll')
const photo = require('./photo')
const text = require('./text')

const events = ({ bot }) => {
  bot.on('audio', audio)
  bot.on('poll', poll)
  bot.on('photo', photo)
  bot.on('text', text)
}

module.exports = events
