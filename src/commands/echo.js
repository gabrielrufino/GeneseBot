const echo = context => {
  const response = context
    .update
    .message
    .text
    .split(' ')
    .slice(1)
    .join(' ')

  context.reply(response)
}

module.exports = echo
