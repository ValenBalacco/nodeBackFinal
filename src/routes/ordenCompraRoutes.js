const express = require('express');
const router = express.Router();
const ordenCompraController = require('../controllers/ordenCompraController');
const { authenticateToken, authorizeAdmin } = require('../Midleware/auth'); 

router.get('/', authenticateToken, authorizeAdmin, ordenCompraController.getAll);
router.get('/:id', authenticateToken, authorizeAdmin, ordenCompraController.getById);
router.post('/', authenticateToken, ordenCompraController.create);
router.put('/:id', authenticateToken, authorizeAdmin, ordenCompraController.update);
router.delete('/:id', authenticateToken, authorizeAdmin, ordenCompraController.remove);

module.exports = router;