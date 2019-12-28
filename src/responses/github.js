const axios = require('axios')

const github = async (match) => {
  const user = match[1]

  const { data } = await axios.get(`https://api.github.com/users/${user}`)
  const resp = {
    image: data.avatar_url,
    message: `
			${data.name}
			${data.bio}

			From: ${data.location}
			Followers: ${data.followers}
			Following: ${data.following}
			Blog: ${data.blog}

			Repositories: ${data.public_repos}
			Gists: ${data.public_gists}
		`
  }

  return resp
}

module.exports = github
