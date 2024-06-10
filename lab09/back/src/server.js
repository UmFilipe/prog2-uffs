const express = require('express')
const app = express()
const cors = require('cors')

const port = 5372
const { db } = require('./database/connection')

app.use(cors())
app.use(express.json())

app.get('/:indice?', async (req, res) => {
    try {
        if (req.params.indice === undefined) {
            const cursos = await db.any(
                "SELECT * FROM cursos;"
            )
            return res.json(cursos)
        } else {
            let indice = req.params.indice
            const curso = await db.one(
                "SELECT id, nome, semestre, turno, coordenacao, segunda, terca, quarta, quinta, sexta FROM cursos WHERE id = $1;",
                indice
            )
            return res.json(curso)
        }
    } catch (error) {
        console.log(error)
        res.status(500).send("Erro ao receber os cursos")
    }
})
        

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})
