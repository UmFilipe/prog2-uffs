const db = require('../model/dbModel');
const path = process.cwd()

exports.getCursos = (req, res) => {
    if (req.params.indice === undefined) {
        console.log(process.cwd())
        return res.json(db.cursos);
    } else {
        let indice = req.params.indice;
        return res.json([db.cursos[indice]]);
    }
};

exports.addCurso = (req, res) => {
    try {
        db.cursos.push({
            id: req.body.id,
            nome: req.body.nome,
            turno: req.body.turno,
            id_campus: req.body.id_campus,
        });
        res.status(201).send("Curso adicionado com sucesso!");
    } catch (error) {
        console.log(error);
        res.status(500).send("Erro ao adicionar o curso");
    }
};

exports.updateCurso = (req, res) => {
    try {
        const indice = req.params.indice;
        const cursoExistente = db.cursos[indice];

        if (!cursoExistente) {
            return res.status(404).send("Curso não encontrado");
        }

        const novoCurso = {
            id: req.body.id || cursoExistente.id,
            nome: req.body.nome || cursoExistente.nome,
            turno: req.body.turno || cursoExistente.turno,
            id_campus: req.body.id_campus || cursoExistente.id_campus,
        };

        db.cursos[indice] = novoCurso;

        res.status(200).send("Curso atualizado com sucesso!");
    } catch (error) {
        console.log(error);
        res.status(500).send("Erro ao atualizar o curso");
    }
};

exports.deleteCurso = (req, res) => {
    try {
        let indiceCurso = req.params.indice;
        db.cursos.splice(indiceCurso, 1);
        res.status(201).send("Curso removido com sucesso");
    } catch (error) {
        console.log(error);
        res.status(500).send("Erro ao remover o curso");
    }
};

exports.getCCRs = (req, res) => {
    if (req.params.indice === undefined) {
        return res.json(db.ccrs);
    } else {
        let indice = req.params.indice;
        return res.json([db.ccrs[indice]]);
    }
};

exports.addCCR = (req, res) => {
    try {
        db.ccrs.push({
            id: req.body.id,
            nome: req.body.nome,
        });
        res.status(201).send("CCR adicionado com sucesso!");
    } catch (error) {
        console.log(error);
        res.status(500).send("Erro ao adicionar o CCR");
    }
};

exports.updateCCR = (req, res) => {
    try {
        const indice = req.params.indice;
        const ccrExistente = db.ccrs[indice];

        if (!ccrExistente) {
            return res.status(404).send("CCR não encontrado");
        }

        const novoCCR = {
            id: req.body.id || ccrExistente.id,
            nome: req.body.nome || ccrExistente.nome,
        };

        db.ccrs[indice] = novoCCR;

        res.status(200).send("CCR atualizado com sucesso!");
    } catch (error) {
        console.log(error);
        res.status(500).send("Erro ao atualizar o CCR");
    }
};

exports.deleteCCR = (req, res) => {
    try {
        let indiceCCR = req.params.indice;
        db.ccrs.splice(indiceCCR, 1);
        res.status(201).send("CCR removido com sucesso");
    } catch (error) {
        console.log(error);
        res.status(500).send("Erro ao remover o CCR");
    }
};

exports.getIndex = (req, res) => {
    return res.sendFile(path + "/view/index.html");
};
