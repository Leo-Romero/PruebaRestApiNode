const ExpressServer = require('./server/expressServer')
const config = require('../config')

const startServer = async () => {

    const server = new ExpressServer()
    console.log('Express cargado.')

    server.start()
    console.log(`** Servidor escuchando en el puerto: ${config.port} **`)

}

module.exports = startServer
