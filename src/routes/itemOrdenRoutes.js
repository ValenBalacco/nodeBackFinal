const express = require('express');
const router = express.Router();
const itemOrdenController = require('../controllers/itemOrdenController');
const { authenticateToken, authorizeAdmin } = require('../auth/auth');

router.get('/', itemOrdenController.getAll);
router.get('/:id', itemOrdenController.getById);
router.post('/', authenticateToken, authorizeAdmin, itemOrdenController.create);
router.put('/:id', authenticateToken, authorizeAdmin, itemOrdenController.update);
router.delete('/:id', authenticateToken, authorizeAdmin, itemOrdenController.remove);

module.exports = router;