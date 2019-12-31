const bitcoin = require('./bitcoin')
const cep = require('./cep')
const date = require('./date')
const echo = require('./echo')
const fib = require('./fib')
const github = require('./github')
const help = require('./help')
const ping = require('./ping')
const start = require('./start')
const whois = require('./whois')

const router = [
  {
    command: 'bitcoin',
    handler: bitcoin,
    description: ''
  },
  {
    command: 'cep',
    handler: cep,
    description: ''
  },
  {
    command: 'date',
    handler: date,
    description: ''
  },
  {
    command: 'echo',
    handler: echo,
    description: ''
  },
  {
    command: 'fib',
    handler: fib,
    description: ''
  },
  {
    command: 'github',
    handler: github,
    description: ''
  },
  {
    command: 'help',
    handler: help,
    description: ''
  },
  {
    command: 'ping',
    handler: ping,
    description: ''
  },
  {
    command: 'start',
    handler: start,
    description: ''
  },
  {
    command: 'whois',
    handler: whois,
    description: ''
  }
]

module.exports = router
