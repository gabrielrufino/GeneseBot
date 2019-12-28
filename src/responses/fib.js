const calc = (n) => {
  if (n == 0 || n == 1) {
    return n
  }

  return calc(n - 1) + calc(n - 2)
}

const fib = (match) => {
  const n = match[1]
  const resp = `fib(${n}) = ${calc(n)}`

  return resp
}

module.exports = fib
