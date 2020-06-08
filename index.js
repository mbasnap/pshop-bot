const TelegramBot = require('node-telegram-bot-api')
require('dotenv').config()
const os = require('os')

const bot = new TelegramBot(process.env.TOKEN, { polling: true })
bot.on('message', msg => {
    bot.sendMessage(msg.chat.id, `Hello ${msg.from.first_name} Win: ${os.type()}`)
})