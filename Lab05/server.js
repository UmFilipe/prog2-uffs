const express = require('express')
const db = require('./database')

const app = express()
const port = 5372

app.use(express.static('public'))    
app.use(express.json())

// Rotas primárias

app.get('/index', (req, res) => {
    return res.sendFile(__dirname + "/public/index.html")
})

app.get('/', (req, res) => {
    return res.json(db)
})

// Rotas de criação (CREATE)

app.post('/cursos/add', (req, res) => {
    try {
        db.cursos.push({
            id: req.body.id,
            nome: req.body.nome,
            turno: req.body.turno,
            id_campus: req.body.id_campus
        })

        res.status(201).send("Curso adicionado com sucesso!")

    } catch (error) {
        console.log(error)
        res.status(500).send("Erro ao adicionar o curso")
    }
});

app.post('/ccrs/add', (req, res) => {
    try {
        db.ccrs.push({
            id: req.body.id,
            nome: req.body.nome,
        })

        res.status(201).send("CCR adicionado com sucesso!")

    } catch (error) {
        console.log(error)
        res.status(500).send("Erro ao adicionar o CCR")
    }
   
})

// Rotas de leitura (READ)

app.get('/cursos/:indice?', (req, res) => {
    if (req.params.indice === undefined) {
        return res.json(db.cursos)
    } else {
        let indice = req.params.indice
        return res.json([db.cursos[indice]])
    }
});

app.get('/ccrs/:indice?', (req, res) => {
    if (req.params.indice === undefined) {
        return res.json(db.ccrs)
    } else {
        let indice = req.params.indice
        return res.json([db.ccrs[indice]])
    }
});

// Rotas de edição (UPDATE)

app.put('/cursos/update/:indice', (req, res) => {
    try {
        const indice = req.params.indice
        const cursoExistente = db.cursos[indice]

        if (!cursoExistente) {
            return res.status(404).send("Curso não encontrado")
        }

        const novoCurso = {
            id: req.body.id || cursoExistente.id,
            nome: req.body.nome || cursoExistente.nome,
            turno: req.body.turno || cursoExistente.turno,
            id_campus: req.body.id_campus || cursoExistente.id_campus
        };

        db.cursos[indice] = novoCurso

        res.status(200).send("Curso atualizado com sucesso!")
    } catch (error) {
        console.log(error);
        res.status(500).send("Erro ao atualizar o curso")
    }
});

app.put('/ccrs/update/:indice', (req, res) => {
    try {
        const indice = req.params.indice
        const ccrExistente = db.ccrs[indice]

        if (!ccrExistente) {
            return res.status(404).send("CCR não encontrado")
        }

        const novoCCR = {
            id: req.body.id || ccrExistente.id,
            nome: req.body.nome || ccrExistente.nome
        }

        db.ccrs[indice] = novoCCR

        res.status(200).send("CCR atualizado com sucesso!")
    } catch (error) {
        console.log(error)
        res.status(500).send("Erro ao atualizar o CCR")
    }
});

// Rotas de remoção (DELETE)

app.delete('/cursos/delete/:indice', (req, res) => {
    try {
        let indiceCurso = req.params.indice

        db.cursos.splice(indiceCurso, 1)

        res.status(201).send("Curso removido com sucesso")
    } catch (error) {
        console.log(error)
        res.status(500).send("Erro ao remover o curso")
    }
})

app.delete('/ccrs/delete/:indice', (req, res) => {
    try {
        let indiceCCR = req.params.indice

        db.ccrs.splice(indiceCCR, 1)

        res.status(201).send("CCR removido com sucesso")
    } catch (error) {
        console.log(error)
        res.status(500).send("Erro ao remover o CCR")
    }
})

// Inicialização da API

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})