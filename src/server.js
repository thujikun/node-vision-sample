import Koa from 'koa'
import bodyParser from 'koa-better-body'
import router from 'routes/router'
import koaNunjucks from 'koa-nunjucks-2'
import koaStatic from 'koa-static'
import path from 'path'

/**
 * Main Koa Instance
 */
const app = new Koa()

/**
 * Apply middlewares
 */
app.use(bodyParser())
app.use(koaStatic('dist'))
app.use(koaNunjucks({
    functionName: 'renderNunjucks',
    ext: '.nunjucks',
    path: path.join(process.cwd(), 'views'),
    nunjucksConfig: {
        autoescape: true
    }
}))

// catch throw error
app.use(async (ctx, next) => {
    try {
        await next()
        // not found
        if (ctx.status === 404) {
            ctx.body = {
                status: 404,
                error_message: 'Not Found',
                data: null
            }
        }
    } catch (error) {
        ctx.status = 500
        ctx.body = {
            status: 500,
            error_message: 'Internal Server Error',
            data: null
        }
    }
})

app.use(router.routes())
app.use(router.allowedMethods())

export default app
