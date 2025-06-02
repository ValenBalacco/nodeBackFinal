const express = require('express');
const router = express.Router();
const imgController = require('../controllers/imgController');
const { authenticateToken, authorizeAdmin } = require('../auth/auth');

router.get('/', imgController.getAll);
router.get('/:id', imgController.getById);
router.post('/', authenticateToken, authorizeAdmin, imgController.create);
router.put('/:id', authenticateToken, authorizeAdmin, imgController.update);
router.delete('/:id', authenticateToken, authorizeAdmin, imgController.remove);

module.exports = router;