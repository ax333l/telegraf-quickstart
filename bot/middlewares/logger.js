const TelegrafLogger = require('telegraf-logger')

let logger = new TelegrafLogger({
    log: console.log,
    format: '%ut => @%u %fn %ln (%fi): <%ust> %c', 
    contentLength: 100, 
});

logger = logger.middleware()

module.exports = logger