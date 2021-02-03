//importações importantes para funcionamento
const express = require('express')
const app = express()
const db = require('./config/db')
const consign = require('consign')

//passando parametros ao consign
consign()
.include('./config/passport.js')
.then('./config/middlewares.js')
.then('./api')
.then('./config/routes.js')
.into(app) //carregando modulos e lendo arquivos

app.db = db

app.listen(3000, () => {
  console.log('Backend Executando...')
})