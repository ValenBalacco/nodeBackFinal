const express = require('express');
const router = express.Router();
const usuarioDireccionController = require('../controllers/usuarioDireccionController');
const { authenticateToken, authorizeAdmin } = require('../Midleware/auth');

router.get('/', authenticateToken, authorizeAdmin, usuarioDireccionController.getAll);
router.get('/:id', authenticateToken, authorizeAdmin, usuarioDireccionController.getById);
// Permite a cualquier usuario autenticado crear su dirección
router.post('/', authenticateToken, usuarioDireccionController.create);
router.put('/:id', authenticateToken, authorizeAdmin, usuarioDireccionController.update);
router.delete('/:id', authenticateToken, authorizeAdmin, usuarioDireccionController.remove);

module.exports = router;