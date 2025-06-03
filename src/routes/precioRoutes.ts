import { Router } from 'express';
import precioController from '../controllers/precioController';
import { authenticateToken, authorizeAdmin } from '../Midleware/auth';

const router = Router();

router.get('/', precioController.getAll);
router.get('/:id', precioController.getById);
router.post('/', authenticateToken, authorizeAdmin, precioController.create);
router.put('/:id', authenticateToken, authorizeAdmin, precioController.update);
router.delete('/:id', authenticateToken, authorizeAdmin, precioController.remove);

export default router;