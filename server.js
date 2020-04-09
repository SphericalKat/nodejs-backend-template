const app = require('./app')
const https = require('https')
const fs = require('fs')
const path = require('path')
const logger = require('./logging/logger')

httpsOptions = {
  ca: fs.readFileSync(path.join('certs', 'CA-cert.pem')),
  cert: fs.readFileSync(path.join('certs', 'server-cert.pem')),
  key: fs.readFileSync(path.join('certs', 'server-key.pem'))
}

const PORT = process.env.PORT || 8443

const server = https.createServer(httpsOptions, app)

server.listen(PORT, () => {
  logger.info(`started server on port ${PORT}`)
})
