import { Request, Response } from 'express';
import UsuarioDireccionService from '../services/usuarioDireccionService';

interface AuthRequest extends Request {
  user?: { id: number };
}

const usuarioDireccionController = {
  // Obtiene todas las relaciones (admin, opcional)
  async getAll(req: Request, res: Response): Promise<void> {
    try {
      const direcciones = await UsuarioDireccionService.getAll();
      res.json(direcciones);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  // Obtiene una relación por su ID (admin, opcional)
  async getById(req: Request, res: Response): Promise<void> {
    try {
      const direccion = await UsuarioDireccionService.getById(Number(req.params.id));
      if (!direccion) {
        res.status(404).json({ error: 'UsuarioDireccion no encontrada' });
        return;
      }
      res.json(direccion);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  // Obtiene todas las direcciones para un usuario por su ID (ESTE ES EL QUE USA TU FRONT)
  async getByUsuarioId(req: Request, res: Response): Promise<void> {
    try {
      const usuarioId = req.params.usuarioId;
      if (!usuarioId) {
        res.status(400).json({ error: "usuarioId requerido" });
        return;
      }
      const relaciones = await UsuarioDireccionService.getByUsuarioId(usuarioId);
      res.json(relaciones);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  // Crea una relación usuario-dirección
  async create(req: AuthRequest, res: Response): Promise<void> {
    try {
      const usuarioId = req.user?.id;
      const data = { ...req.body, usuarioId };
      const nuevaDireccion = await UsuarioDireccionService.create(data);
      res.status(201).json(nuevaDireccion);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  },

  // Actualiza una relación
  async update(req: Request, res: Response): Promise<void> {
    try {
      const direccionActualizada = await UsuarioDireccionService.update(Number(req.params.id), req.body);
      res.json(direccionActualizada);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  },

  // Elimina una relación
  async remove(req: Request, res: Response): Promise<void> {
    try {
      await UsuarioDireccionService.remove(Number(req.params.id));
      res.status(204).send();
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
};

export default usuarioDireccionController;