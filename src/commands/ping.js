const ping = require('ping')

const handler = context => {
  const host = context.update.message.text.split(' ')[1]

  ping.promise.probe(host)
    .then(result => {
      if (!result.alive) {
        context.reply(`Host ${host} is not alive!`)
      } else {
        context.replyWithMarkdown(`\`\`\`${result.output}\`\`\``)
      }
    })
}

module.exports = handler
