const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const { authenticateToken, authorizeAdmin } = require('../Midleware/auth');

router.get('/', authenticateToken, authorizeAdmin, usuarioController.getAll);
router.get('/:id', authenticateToken, authorizeAdmin, usuarioController.getById);
router.post('/register', usuarioController.register); 
router.post('/login', usuarioController.login);   
router.put('/:id', authenticateToken, authorizeAdmin, usuarioController.update);
router.delete('/:id', authenticateToken, authorizeAdmin, usuarioController.remove);

module.exports = router;