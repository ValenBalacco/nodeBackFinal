import { Router } from 'express';
import talleController from '../controllers/talleController';
import { authenticateToken, authorizeAdmin } from '../Midleware/auth';

const router = Router();

router.get('/', talleController.getAll);
router.get('/:id', talleController.getById);
router.post('/', authenticateToken, authorizeAdmin, talleController.create);
router.put('/:id', authenticateToken, authorizeAdmin, talleController.update);
router.delete('/:id', authenticateToken, authorizeAdmin, talleController.remove);

export default router;