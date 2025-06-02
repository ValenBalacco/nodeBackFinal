const express = require('express');
const router = express.Router();
const ordenCompraController = require('../controllers/ordenCompraController');
const { authenticateToken } = require('../middleware/auth');

router.get('/', ordenCompraController.getAll);
router.get('/:id', ordenCompraController.getById);
router.post('/', authenticateToken, ordenCompraController.create);
router.put('/:id', authenticateToken, ordenCompraController.update);
router.delete('/:id', authenticateToken, ordenCompraController.remove);

module.exports = router;