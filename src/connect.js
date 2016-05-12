import Client from 'level-connect-client'
import pkg from 'root/package.json'

const client = new Client({
    name: pkg.name,
    connectURL: process.env.CONNECT_URL
})

export default client
