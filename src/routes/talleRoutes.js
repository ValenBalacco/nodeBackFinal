const express = require('express');
const router = express.Router();
const talleController = require('../controllers/talleController');
const { authenticateToken, authorizeAdmin } = require('../middleware/auth');

router.get('/', talleController.getAll);
router.get('/:id', talleController.getById);
router.post('/', authenticateToken, authorizeAdmin, talleController.create);
router.put('/:id', authenticateToken, authorizeAdmin, talleController.update);
router.delete('/:id', authenticateToken, authorizeAdmin, talleController.remove);

module.exports = router;