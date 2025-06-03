import { Router } from 'express';
import imgController from '../controllers/imgController';
import { authenticateToken, authorizeAdmin } from '../Midleware/auth';

const router = Router();

router.get('/', imgController.getAll);
router.get('/:id', imgController.getById);
router.post('/', authenticateToken, authorizeAdmin, imgController.create);
router.put('/:id', authenticateToken, authorizeAdmin, imgController.update);
router.delete('/:id', authenticateToken, authorizeAdmin, imgController.remove);

export default router;