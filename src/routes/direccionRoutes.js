const express = require('express');
const router = express.Router();
const direccionController = require('../controllers/direccionController');
const { authenticateToken, authorizeAdmin } = require('../Midleware/auth');

router.get('/', direccionController.getAll);
router.get('/:id', direccionController.getById);
router.post('/', authenticateToken, authorizeAdmin, direccionController.create);
router.put('/:id', authenticateToken, authorizeAdmin, direccionController.update);
router.delete('/:id', authenticateToken, authorizeAdmin, direccionController.remove);

module.exports = router;