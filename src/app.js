'use strict'

const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController
const TextCommand = Telegram.TextCommand

const token = ''
const GeneseBot = new Telegram.Telegram(token)

class EventsController extends TelegramBaseController {
    startCommand(scope) {
        let message = 'Wellcome! I\'m GeneseBot. Can i help you?'
        scope.sendMessage(message) 
    }
    
    helpCommand(scope) {
        let message = 'How can i help you?'
        scope.sendMessage(message)
    }

    dateCommand(scope) {
        let message = new Date()
        scope.sendMessage(message.toString())
    }

    get routes() {
        return {
            'start': 'startCommand',
            'help': 'helpCommand',
            'date': 'dateCommand'
        }
    }
}

GeneseBot.router
    .when(
        new TextCommand('/start', 'start'),
        new EventsController()
    )   
    .when(
        new TextCommand('/help', 'help'),
        new EventsController()
    )
    .when(
        new TextCommand('/date', 'date'),
        new EventsController()
    )
    