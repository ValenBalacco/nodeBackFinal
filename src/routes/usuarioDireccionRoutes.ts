import { Router } from 'express';
import usuarioDireccionController from '../controllers/usuarioDireccionController';
import { authenticateToken, authorizeAdmin } from '../Midleware/auth';

const router = Router();

router.get('/', authenticateToken, authorizeAdmin, usuarioDireccionController.getAll);
router.get('/:id', authenticateToken, authorizeAdmin, usuarioDireccionController.getById);
router.post('/', authenticateToken, usuarioDireccionController.create);
router.put('/:id', authenticateToken, authorizeAdmin, usuarioDireccionController.update);
router.delete('/:id', authenticateToken, authorizeAdmin, usuarioDireccionController.remove);

export default router;