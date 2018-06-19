const axios = require('axios')

const github = async (match) => {
	const user = match[1]

	const { data } = await axios.get(`https://api.github.com/users/${user}`)
	const resp = JSON.stringify(data)

	return resp
}

module.exports = github
