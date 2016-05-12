import koaRouter from 'koa-router'

const router = koaRouter()

router
    .get('/api/vision', require('routes/api/vision/get'))
    .get('/*', require('routes/views/index'))

export default router
