const moment = require('moment')

const time = context => {
  const response = moment().format('HH:mm')

  context.reply(response)
}

module.exports = time
