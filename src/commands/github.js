const axios = require('axios')

const github = async context => {
  const user = context.update.message.text.split(' ')[1]
  const { data } = await axios.get(`https://api.github.com/users/${user}`)

  const response = {
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

  context.replyWithPhoto({ url: response.image }, { caption: response.message })
}

module.exports = github
