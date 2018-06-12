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

const help = `
Hey, how can i help you?

GeneseBot understands the following commands:

/bitcoin - Current info about bitcoin
/cep [CEP Number] - Info about [CEP Number] address
/date - Current date and time
/echo [Whatever] - Print Whatever
/help - Help message
/start - Call the bot

`

const start = (msg) => {
  return {
    profile: './public/imgs/profile.jpg',
    message: `Hello, ${msg.from.first_name}! My name is GeneseBot and i'm a chatbot ready to the hard work... any work :D Nice to meet you!`
  }
}

module.exports = {
  bitcoin,
  cep,
  date,
  echo,
  help,
  start
}
