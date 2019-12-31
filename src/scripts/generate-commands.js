const router = require('../commands/router')

const commands = router
  .map(
    route => `${route.command} - ${route.description || 'No description'}\n`
  )
  .join('')

console.log(commands)
