// Configuración del express
const express = require('express')
const morgan = require('morgan')
const config = require('../../config')

class ExpressServer {

    constructor() {
        this.app = express()
        this.port = config.port
        this.basePathUsers = `${config.api.prefix}/users`

        this._middlewares()
        this._routes()
    }

    _middlewares() {
        // agrego middleware JSON
        this.app.use(express.json())
        // loguea en la consola las entradas a la API
        this.app.use(morgan('tiny'))
    }

    _routes() {
        // para corroborar si la app está viva
        this.app.head('/status', (req, res) => {
            res.status(200).end()
        })

        this.app.use(this.basePathUsers, require('../../routes/users'))
    }

    async start() {
        this.app.listen(this.port, (error)=>{
            if(error) {
                console.log(error)
                process.exit(1)
                return
            }
        })
    }

}

module.exports = ExpressServer