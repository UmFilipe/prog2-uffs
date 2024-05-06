const { db } = require("./dbController")

exports.getCCRs = async (req, res) => {
    try {
        if (req.params.indice === undefined) {
            const ccrs = await db.any(
                "SELECT * FROM ccrs;"
            )
            return res.json(ccrs)
        } else {
            let indice = req.params.indice
            const ccr = await db.one(
                "SELECT id, nome, descricao FROM ccr WHERE id = $1;",
                indice
            )
            return res.json(ccr)
        }
    } catch (error) {
        console.log(error)
        res.status(500).send("Erro ao receber os CCRs")
    }
}

exports.addCCR = async (req, res) => {
    try {
        await db.none(
            "INSERT INTO ccrs (id, nome) VALUES ($1, $2)",
            [req.body.id, req.body.nome]
        )
        res.status(201).send("CCR adicionado com sucesso!")
    } catch (error) {
        console.log(error)
        res.status(500).send("Erro ao adicionar o CCR")
    }
}

exports.updateCCR = async (req, res) => {
    try {
        await db.none(
            "UPDATE ccrs SET nome = $1 WHERE ID = $2;",
            [req.body.nome, req.params.indice]
        )
        res.status(201).send("CCR editado com sucesso!")
    } catch (error) {
        console.log(error)
        res.status(500).send("Erro ao editar o CCR")
    }
}

exports.deleteCCR = async (req, res) => {
    try {
        await db.none(
            "DELETE FROM ccrs WHERE ID = $1;",
            [req.params.indice]
        )
        res.status(201).send("CCR removido com sucesso!")
    } catch (error) {
        console.log(error)
        res.status(500).send("Erro ao remover o CCR")
    }
}