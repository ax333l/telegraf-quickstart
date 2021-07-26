require('dotenv').config()

const { Telegraf, Markup } = require('telegraf')

const token = process.env.TOKEN

if(!token) {
    console.error('No telegram token provided')
    process.exit(0)
}

const bot = new Telegraf(token)

require("fs").readdirSync('./bot/middlewares').forEach(function(file) {
    bot.use(require("./middlewares/" + file));
});

const buttons = [
    'Working...'
]

bot.command('start', (ctx) => {
    return ctx.reply(
        'Выберите действие',
        Markup.keyboard([
            ...buttons,
        ]).resize()
    )
})  

bot.launch()

process.on('SIGTERM', () => {
    console.log('Stoping telegram bot...');
    bot.stop(() => {
        console.log('Bot stoped.');
    });
});
  