const config = require('../knexfile.js')
const knex = require('knex')(config)

//tomar cuidado com migration com aplicações grandes 
//pode sobre carregar o banco com ele sempre auterando as tabelas e inserindo novos daso
knex.migrate.latest([config])
module.exports = knex