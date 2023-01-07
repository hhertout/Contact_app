const http = require('http')
const app = require('./app')

const normalizedPort = val => {
    const port = parseInt(val, 10)

    if(isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false
}

const port = normalizedPort(process.env.PORT || '3000')
app.set('port', port)

const errorHandler = error => {
    if (error.syscall != 'listen'){
        throw error
    }
    const adress = server.address()
    const bind = typeof adress === 'string' ? `pipe ${adress}` : `port:  ${port}`
    switch (error.code){
        case 'EACCES' : 
            console.error(`${bind} require elevated privileges`)
            process.exit(1);
            break;
        case 'EADDRINUSE' : 
            console.error(`${bind} is already in use`)
            process.exit(1);
            break
        default:
            throw error
    }
}

const server = http.createServer(app)

server.on('error', errorHandler)
server.on('listening', () => {
    const adress = server.address()
    const bind = typeof adress === 'string' ? `pipe ${adress}` : `port ${port}`
    console.log(`Listening on ${bind}`)
})


server.listen(process.env.PORT || 3000)