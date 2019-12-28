const calc = (n) => {
  if (n === 0 || n === 1) {
    return n
  }

  return calc(n - 1) + calc(n - 2)
}

const fib = number => {
  const resp = `fib(${number}) = ${calc(number)}`

  return resp
}

module.exports = fib
