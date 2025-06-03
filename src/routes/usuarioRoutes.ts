import { Router } from 'express';
import usuarioController from '../controllers/usuarioController';
import { authenticateToken, authorizeAdmin } from '../Midleware/auth';

const router = Router();

router.get('/', authenticateToken, authorizeAdmin, usuarioController.getAll);
router.get('/:id', authenticateToken, authorizeAdmin, usuarioController.getById);
router.post('/register', usuarioController.register);
router.post('/login', usuarioController.login);
router.put('/:id', authenticateToken, authorizeAdmin, usuarioController.update);
router.delete('/:id', authenticateToken, authorizeAdmin, usuarioController.remove);

export default router;