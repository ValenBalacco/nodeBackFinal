const express = require('express');
const router = express.Router();
const descuentoController = require('../controllers/descuentoController');
const { authenticateToken, authorizeAdmin } = require('../auth/auth');

router.get('/', descuentoController.getAll);
router.get('/:id', descuentoController.getById);
router.post('/', authenticateToken, authorizeAdmin, descuentoController.create);
router.put('/:id', authenticateToken, authorizeAdmin, descuentoController.update);
router.delete('/:id', authenticateToken, authorizeAdmin, descuentoController.remove);

module.exports = router;