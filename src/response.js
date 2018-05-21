const axios = require('axios')

const start = 'Hey! My name is GeneseBot and i\'m a chatbot ready to the hard work... any work :D Nice to meet you!'
const help = 'How can i help you?'
const date = () => Date()
const bitcoin = () => axios.get('https://www.mercadobitcoin.net/api/BTC/ticker')
const echo = (match) => match[1]

module.exports = {
  start,
  help,
  date,
  bitcoin,
  echo
}
