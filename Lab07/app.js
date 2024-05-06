const express = require('express')
const app = express()
const mainRoutes = require('./routes/routes')

app.use(express.static('view'))
app.use(express.json())
app.use('/', mainRoutes)

const port = 5372

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
});
