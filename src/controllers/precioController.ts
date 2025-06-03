import { Request, Response } from 'express';
import PrecioService from '../services/precioService';

const precioController = {
  async getAll(req: Request, res: Response): Promise<void> {
    try {
      const precios = await PrecioService.getAll();
      res.json(precios);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  async getById(req: Request, res: Response): Promise<void> {
    try {
      const precio = await PrecioService.getById(Number(req.params.id));
      if (!precio) {
        res.status(404).json({ error: 'Precio no encontrado' });
        return;
      }
      res.json(precio);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  async create(req: Request, res: Response): Promise<void> {
    try {
      const nuevoPrecio = await PrecioService.create(req.body);
      res.status(201).json(nuevoPrecio);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  },

  async update(req: Request, res: Response): Promise<void> {
    try {
      const precioActualizado = await PrecioService.update(Number(req.params.id), req.body);
      res.json(precioActualizado);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  },

  async remove(req: Request, res: Response): Promise<void> {
    try {
      await PrecioService.remove(Number(req.params.id));
      res.status(204).send();
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
};

export default precioController;