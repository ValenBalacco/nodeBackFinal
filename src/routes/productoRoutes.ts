import { Router } from 'express';
import productoController from '../controllers/productoController';
import { authenticateToken, authorizeAdmin } from '../Midleware/auth';

const router = Router();

router.post('/', authenticateToken, authorizeAdmin, productoController.create);
router.put('/:id', authenticateToken, authorizeAdmin, productoController.update);
router.delete('/:id', authenticateToken, authorizeAdmin, productoController.remove);

router.get('/', productoController.getAll);
router.get('/:id', productoController.getById);

export default router;