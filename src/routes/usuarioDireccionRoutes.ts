import { Router } from 'express';
import usuarioDireccionController from '../controllers/usuarioDireccionController';
import { authenticateToken, authorizeAdmin } from '../Midleware/auth';

const router = Router();

// Ruta para obtener todas las direcciones de un usuario por su id
router.get('/:usuarioId', authenticateToken, usuarioDireccionController.getByUsuarioId);

// Resto de rutas (admin opcional)
router.get('/', authenticateToken, authorizeAdmin, usuarioDireccionController.getAll);
router.get('/detalle/:id', authenticateToken, authorizeAdmin, usuarioDireccionController.getById);
router.post('/', authenticateToken, usuarioDireccionController.create);
router.put('/:id', authenticateToken, authorizeAdmin, usuarioDireccionController.update);
router.delete('/:id', authenticateToken, authorizeAdmin, usuarioDireccionController.remove);

export default router;