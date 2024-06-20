const express = require('express');
const router = express.Router();

const MedicosController = require('../controllers/MedicosController');
router.get('/', MedicosController.list);
router.post('/', MedicosController.save);
router.delete('/:idempresa', MedicosController.delete);
router.get('/:idempresa', MedicosController.edit);
router.post('/:idempresa', MedicosController.update);

module.exports = router;
