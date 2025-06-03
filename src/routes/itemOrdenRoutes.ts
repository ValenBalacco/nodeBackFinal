import { Router } from 'express';
import itemOrdenController from '../controllers/itemOrdenController';
import { authenticateToken, authorizeAdmin } from '../Midleware/auth';

const router = Router();

router.get('/', itemOrdenController.getAll);
router.get('/:id', itemOrdenController.getById);
router.post('/', authenticateToken, authorizeAdmin, itemOrdenController.create);
router.put('/:id', authenticateToken, authorizeAdmin, itemOrdenController.update);
router.delete('/:id', authenticateToken, authorizeAdmin, itemOrdenController.remove);

export default router;