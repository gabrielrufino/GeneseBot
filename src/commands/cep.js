const axios = require('axios')

const cep = async context => {
  const number = context.update.message.text.split(' ')[1]

  const { data } = await axios.get(`https://viacep.com.br/ws/${number}/json/`)
  const response = `
    ${data.logradouro}

    Estado: ${data.uf}
    Bairro: ${data.bairro}
    Cidade: ${data.localidade}
  `

  context.reply(response)
}

module.exports = cep
