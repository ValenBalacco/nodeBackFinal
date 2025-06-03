import { Router } from 'express';
import categoriaController from '../controllers/categoriaController';
import { authenticateToken, authorizeAdmin } from '../Midleware/auth';

const router = Router();

router.get('/', categoriaController.getAll);
router.get('/:id', categoriaController.getById);
router.post('/', authenticateToken, authorizeAdmin, categoriaController.create);
router.put('/:id', authenticateToken, authorizeAdmin, categoriaController.update);
router.delete('/:id', authenticateToken, authorizeAdmin, categoriaController.remove);

export default router;