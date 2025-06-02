const express = require('express');
const router = express.Router();
const categoriaController = require('../controllers/categoriaController');
const { authenticateToken, authorizeAdmin } = require('../Midleware/auth');

router.get('/', categoriaController.getAll);
router.get('/:id', categoriaController.getById);
router.post('/', authenticateToken, authorizeAdmin, categoriaController.create);
router.put('/:id', authenticateToken, authorizeAdmin, categoriaController.update);
router.delete('/:id', authenticateToken, authorizeAdmin, categoriaController.remove);

module.exports = router;