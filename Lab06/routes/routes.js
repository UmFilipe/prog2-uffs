const express = require('express');
const apiController = require('../controllers/apiController');
const viewController = require('../controllers/viewController');

const router = express.Router();

router.get('/cursos/:indice?', apiController.getCursos);
router.post('/cursos/add', apiController.addCurso);
router.put('/cursos/update/:indice', apiController.updateCurso);
router.delete('/cursos/delete/:indice', apiController.deleteCurso);

router.get('/ccrs/:indice?', apiController.getCCRs);
router.post('/ccrs/add', apiController.addCCR);
router.put('/ccrs/update/:indice', apiController.updateCCR);
router.delete('/ccrs/delete/:indice', apiController.deleteCCR);

router.get('/index', apiController.getIndex);

module.exports = router;
