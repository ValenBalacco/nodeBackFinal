const express = require('express');
const router = express.Router();
const precioController = require('../controllers/precioController');
const { authenticateToken, authorizeAdmin } = require('../Midleware/auth');

router.get('/', precioController.getAll);
router.get('/:id', precioController.getById);
router.post('/', authenticateToken, authorizeAdmin, precioController.create);
router.put('/:id', authenticateToken, authorizeAdmin, precioController.update);
router.delete('/', authenticateToken, authorizeAdmin, precioController.remove);

module.exports = router;