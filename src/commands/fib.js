const calc = (n) => {
  if (n < 0) {
    return 0
  }

  if (n === 0 || n === 1) {
    return n
  }

  return calc(n - 1) + calc(n - 2)
}

const fib = context => {
  const arg = context.update.message.text.split(' ')[1]
  const number = Number(arg)

  if (number > 30) {
    context.reply('This number is too large :(')
  } else {
    const response = `fib(${number}) = ${calc(number)}`

    context.reply(response)
  }
}

module.exports = fib
