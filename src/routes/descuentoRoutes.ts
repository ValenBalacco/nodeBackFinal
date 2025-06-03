import { Router } from 'express';
import descuentoController from '../controllers/descuentoController';
import { authenticateToken, authorizeAdmin } from '../Midleware/auth';

const router = Router();

router.get('/', descuentoController.getAll);
router.get('/:id', descuentoController.getById);
router.post('/', authenticateToken, authorizeAdmin, descuentoController.create);
router.put('/:id', authenticateToken, authorizeAdmin, descuentoController.update);
router.delete('/:id', authenticateToken, authorizeAdmin, descuentoController.remove);

export default router;