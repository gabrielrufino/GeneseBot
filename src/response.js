const axios = require('axios')

const bitcoin = async () => {
  const { data } = await axios.get('https://www.mercadobitcoin.net/api/BTC/ticker')
  const resp = JSON.stringify(data)

  return resp
}

const cep = async (number) => {
  const { data } = await axios.get(`https://viacep.com.br/ws/${number}/json/`)
  const resp = JSON.stringify(data)

  return resp
}

const date = () => Date()

const echo = (match) => match[1]

const help = 'How can i help you?'

const start = 'Hey! My name is GeneseBot and i\'m a chatbot ready to the hard work... any work :D Nice to meet you!'

module.exports = {
  bitcoin,
  cep,
  date,
  echo,
  help,
  start
}
