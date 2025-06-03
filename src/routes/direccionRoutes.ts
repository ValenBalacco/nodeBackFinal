import { Router } from 'express';
import direccionController from '../controllers/direccionController';
import { authenticateToken, authorizeAdmin } from '../Midleware/auth';

const router = Router();

router.get('/', direccionController.getAll);
router.get('/:id', direccionController.getById);
router.post('/', authenticateToken, authorizeAdmin, direccionController.create);
router.put('/:id', authenticateToken, authorizeAdmin, direccionController.update);
router.delete('/:id', authenticateToken, authorizeAdmin, direccionController.remove);

export default router;