import 'babel-polyfill'
import app from 'src/server'

let port = process.env.PORT || process.env.npm_package_config_port || 3000

app.listen(port)

export default app
