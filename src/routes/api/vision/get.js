import Vision from 'utils/vision'

export default async (ctx) => {
    let vision = new Vision()
    let result

    vision.set(ctx.query.$url)
    result = await vision.get()

    ctx.status = 200
    ctx.body = {
        status: 200,
        data: result.responses[0]
    }
}
