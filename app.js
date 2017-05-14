require('dotenv').config().parsed

const env = process.env
const app = require('./server/express')
const routes = require('./server/routes')
const errorHandler = require('./server/errorHandler')

// Erros não previstos
process.on('uncaughtException', function(err){
  console.log('Uncaught Exception', err.message)
});

// Rotas
app.use('/api', routes)

// Handler de Erros
app.use(errorHandler)

// Start Server
const PORT = env.PORT || 3000
module.exports = app.listen(PORT, () => {
  console.log(`Express is running at port [${env.PORT}]...`)
  console.log(`Enviroment: [${env.NODE_ENV}]`)
})