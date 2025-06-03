import { Request, Response } from 'express';
import DetalleService from '../services/detalleService';

const detalleController = {
  async getAll(req: Request, res: Response): Promise<void> {
    try {
      const detalles = await DetalleService.getAll();
      res.json(detalles);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  async getById(req: Request, res: Response): Promise<void> {
    try {
      const detalle = await DetalleService.getById(Number(req.params.id));
      if (!detalle) {
        res.status(404).json({ error: 'Detalle no encontrado' });
        return;
      }
      res.json(detalle);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  async create(req: Request, res: Response): Promise<void> {
    try {
      const nuevoDetalle = await DetalleService.create(req.body);
      res.status(201).json(nuevoDetalle);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  },

  async update(req: Request, res: Response): Promise<void> {
    try {
      const detalleActualizado = await DetalleService.update(Number(req.params.id), req.body);
      res.json(detalleActualizado);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  },

  async remove(req: Request, res: Response): Promise<void> {
    try {
      await DetalleService.remove(Number(req.params.id));
      res.status(204).send();
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
};

export default detalleController;