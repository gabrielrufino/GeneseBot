const chalk = require('chalk')

const output = (message) => {
	console.log(`>> GeneseBot: ${message}`)
}

const initialize = () => {
	console.log(chalk.bold.bgYellow('Initializing GeneseBot'))
}

const notify = (message) => {
	output(chalk.yellow(message))
}

const request = (command) => {
	output(chalk.green(`request to /${command}`))
}



module.exports = {
	output,
	initialize,
	notify,
	request
}
