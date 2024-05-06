const app = require('express')
const cursoController = require('../controllers/cursoController')
const ccrController = require('../controllers/ccrController')
const viewController = require('../controllers/viewController')

const router = app.Router()

router.get('/cursos/:indice?', cursoController.getCursos)
router.post('/cursos', cursoController.addCurso)
router.put('/cursos/:indice', cursoController.updateCurso)
router.delete('/cursos/:indice', cursoController.deleteCurso)

router.get('/ccrs/:indice?', ccrController.getCCRs)
router.post('/ccrs', ccrController.addCCR)
router.put('/ccrs/:indice', ccrController.updateCCR)
router.delete('/ccrs/:indice', ccrController.deleteCCR)

router.get('/index', viewController.getIndex)
router.get('/controllers/viewController', viewController.getViewController)

router.get('/model/dadosCursos', cursoController.getDadosCursosModel)

module.exports = router
