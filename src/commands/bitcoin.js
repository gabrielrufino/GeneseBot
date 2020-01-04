const axios = require('axios')

const bitcoin = async context => {
  const { data } = await axios.get('https://www.mercadobitcoin.net/api/BTC/ticker')

  const response = `
    Mecado Bitcoin

    High: ${data.ticker.high}
    Low: ${data.ticker.low}
    Vol: ${data.ticker.vol}
    Last: ${data.ticker.last}
    Buy: ${data.ticker.buy}
    Sell: ${data.ticker.sell}
  `

  context.reply(response)
}

module.exports = bitcoin
