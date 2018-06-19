const axios = require('axios')

const cep = async (number) => {
  const { data } = await axios.get(`https://viacep.com.br/ws/${number}/json/`)
  const resp = `
    ${data.logradouro}

    Estado: ${data.uf}
    Bairro: ${data.bairro}
    Cidade: ${data.localidade}
  `

  return resp
}

module.exports = cep
