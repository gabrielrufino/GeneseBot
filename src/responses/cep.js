const axios = require('axios')

const cep = async (number) => {
  const { data } = await axios.get(`https://viacep.com.br/ws/${number}/json/`)
  const resp = JSON.stringify(data)

  return resp
}

module.exports = cep
