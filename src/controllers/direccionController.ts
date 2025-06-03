import { Request, Response } from 'express';
import DireccionService from '../services/direccionService';

const direccionController = {
  async getAll(req: Request, res: Response): Promise<void> {
    try {
      const direcciones = await DireccionService.getAll();
      res.json(direcciones);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  async getById(req: Request, res: Response): Promise<void> {
    try {
      const direccion = await DireccionService.getById(Number(req.params.id));
      if (!direccion) {
        res.status(404).json({ error: 'Dirección no encontrada' });
        return;
      }
      res.json(direccion);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  async create(req: Request, res: Response): Promise<void> {
    try {
      const nuevaDireccion = await DireccionService.create(req.body);
      res.status(201).json(nuevaDireccion);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  },

  async update(req: Request, res: Response): Promise<void> {
    try {
      const direccionActualizada = await DireccionService.update(Number(req.params.id), req.body);
      res.json(direccionActualizada);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  },

  async remove(req: Request, res: Response): Promise<void> {
    try {
      await DireccionService.remove(Number(req.params.id));
      res.status(204).send();
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
};

export default direccionController;