const express = require('express');
const router = express.Router();
const detalleController = require('../controllers/detalleController');
const { authenticateToken, authorizeAdmin } = require('../auth/auth');

router.get('/', detalleController.getAll);
router.get('/:id', detalleController.getById);
router.post('/', authenticateToken, authorizeAdmin, detalleController.create);
router.put('/:id', authenticateToken, authorizeAdmin, detalleController.update);
router.delete('/:id', authenticateToken, authorizeAdmin, detalleController.remove);

module.exports = router;