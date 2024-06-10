const pgp = require("pg-promise")({});

const usuario = process.env.DATABASE_USER
const senha = process.env.DATABASE_PASSWORD
const host = process.env.DATABASE_HOST
const porta = process.env.DATABASE_PORT
const banco_de_dados = process.env.DATABASE_NAME
 
const db = pgp(`postgres://${usuario}:${senha}@${host}:${porta}/${banco_de_dados}`)

module.exports = { db }