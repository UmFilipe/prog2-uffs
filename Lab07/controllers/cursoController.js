const { db } = require("./dbController")

exports.getCursos = async (req, res) => {
    try {
        if (req.params.indice === undefined) {
            const cursos = await db.any(
                "SELECT * FROM cursos;"
            )
            return res.json(cursos)
        } else {
            let indice = req.params.indice
            const curso = await db.one(
                "SELECT id, nome, descricao FROM cursos WHERE id = $1;",
                indice
            )
            return res.json(curso)
        }
    } catch (error) {
        console.log(error)
        res.status(500).send("Erro ao receber os cursos")
    }
}

exports.addCurso = async (req, res) => {
    try {
        await db.none(
            "INSERT INTO cursos (id, nome, descricao) VALUES ($1, $2, $3)",
            [req.body.id, req.body.nome, req.body.descricao]
        )
        res.status(201).send("Curso adicionado com sucesso!")
    } catch (error) {
        console.log(error)
        res.status(500).send("Erro ao adicionar o curso")
    }
}

exports.updateCurso = async (req, res) => {
    try {
        await db.none(
            "UPDATE cursos SET nome = $1, descricao = $2 WHERE ID = $3;",
            [req.body.nome, req.body.descricao, req.params.indice]
        )
        res.status(201).send("Curso editado com sucesso!")
    } catch (error) {
        console.log(error)
        res.status(500).send("Erro ao editar o curso")
    }
}

exports.deleteCurso = async (req, res) => {
    try {
        await db.none(
            "DELETE FROM cursos WHERE ID = $1;",
            [req.params.indice]
        )
        res.status(201).send("Curso removido com sucesso!")
    } catch (error) {
        console.log(error)
        res.status(500).send("Erro ao remover o curso")
    }
}

exports.getDadosCursosModel = (req, res) => {
    res.sendFile(process.cwd() + '/model/dadosCursos.json')
}







