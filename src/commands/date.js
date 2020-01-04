const moment = require('moment')

const date = context => {
  const response = moment().format('YYYY/MM/DD')

  context.reply(response)
}

module.exports = date
