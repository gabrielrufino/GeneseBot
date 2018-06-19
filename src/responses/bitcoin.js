const axios = require('axios')

const bitcoin = async () => {
  const { data } = await axios.get('https://www.mercadobitcoin.net/api/BTC/ticker')
  const resp = `
    Mecado Bitcoin

    High: ${data.ticker.high}
    Low: ${data.ticker.low}
    Vol: ${data.ticker.vol}
    Last: ${data.ticker.last}
    Buy: ${data.ticker.buy}
    Sell: ${data.ticker.sell}
  `

  return resp
}

module.exports = bitcoin
