const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');
const { authenticateToken, authorizeAdmin } = require('../middleware/auth');



router.post('/', authenticateToken, authorizeAdmin, productoController.create);
router.put('/:id', authenticateToken, authorizeAdmin, productoController.update);
router.delete('/:id', authenticateToken, authorizeAdmin, productoController.remove);

router.get('/', productoController.getAll);
router.get('/:id', productoController.getById);

module.exports = router;