import { Router } from 'express';
import detalleController from '../controllers/detalleController';
import { authenticateToken, authorizeAdmin } from '../Midleware/auth';

const router = Router();

router.get('/', detalleController.getAll);
router.get('/:id', detalleController.getById);
router.post('/', authenticateToken, authorizeAdmin, detalleController.create);
router.put('/:id', authenticateToken, authorizeAdmin, detalleController.update);
router.delete('/:id', authenticateToken, authorizeAdmin, detalleController.remove);

export default router;