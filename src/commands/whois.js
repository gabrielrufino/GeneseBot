const whois = require('whois')

const handler = context => {
  const host = context.update.message.text.split(' ')[1]

  whois.lookup(host, (error, data) => {
    if (error) {
      return context.reply('Error')
    }

    return context.replyWithMarkdown(`\`\`\`${data}\`\`\``)
  })
}

module.exports = handler
