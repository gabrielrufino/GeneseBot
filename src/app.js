'use strict'

const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController
const TextCommand = Telegram.TextCommand

const token = ''
const chatbot = new Telegram.Telegram(token)

class EventsController extends TelegramBaseController {
    startAction(scope) {
        let msg = 'Wellcome! I\'m GeneseBot. Can i help you?'
        scope.sendMessage(msg) 
    }
    helpAction(scope) {
        let msg = 'How can i help you?'
        scope.sendMessage(msg)
    }
    get routes() {
        return {
            'start': 'startAction',
            'help': 'helpAction'
        }
    }
}

chatbot.router
    .when(
        new TextCommand('/start', 'start'), new EventsController()
    )   
    .when(
        new TextCommand('/help', 'help'), new EventsController()
    )
       