import { Router } from 'express';
import ordenCompraController from '../controllers/ordenCompraController';
import { authenticateToken, authorizeAdmin } from '../Midleware/auth';

const router = Router();

router.get('/', authenticateToken, authorizeAdmin, ordenCompraController.getAll);
router.get('/:id', authenticateToken, authorizeAdmin, ordenCompraController.getById);
router.post('/', authenticateToken, ordenCompraController.create);
router.put('/:id', authenticateToken, authorizeAdmin, ordenCompraController.update);
router.delete('/:id', authenticateToken, authorizeAdmin, ordenCompraController.remove);

export default router;