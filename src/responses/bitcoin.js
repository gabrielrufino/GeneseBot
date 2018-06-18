const axios = require('axios')

const bitcoin = async () => {
  const { data } = await axios.get('https://www.mercadobitcoin.net/api/BTC/ticker')
  const resp = JSON.stringify(data)

  return resp
}

module.exports = bitcoin
