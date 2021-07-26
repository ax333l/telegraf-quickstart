const fastId = (ctx, next) => {
    const id = ctx.update.message?.from.id  || ctx.update.callback_query?.from.id
    ctx.id = id
    next()
}

module.exports = fastId