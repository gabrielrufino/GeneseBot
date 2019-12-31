const calc = (n) => {
  if (n === 0 || n === 1) {
    return n
  }

  return calc(n - 1) + calc(n - 2)
}

const fib = context => {
  const number = context.update.message.text.split(' ')[1]

  const response = `fib(${number}) = ${calc(Number(number))}`

  context.reply(response)
}

module.exports = fib
