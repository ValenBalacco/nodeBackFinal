import { Request, Response } from 'express';
import DescuentoService from '../services/descuentoService';

const descuentoController = {
  async getAll(req: Request, res: Response): Promise<void> {
    try {
      const descuentos = await DescuentoService.getAll();
      res.json(descuentos);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  async getById(req: Request, res: Response): Promise<void> {
    try {
      const descuento = await DescuentoService.getById(Number(req.params.id));
      if (!descuento) {
        res.status(404).json({ error: 'Descuento no encontrado' });
        return;
      }
      res.json(descuento);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  async create(req: Request, res: Response): Promise<void> {
    try {
      const nuevoDescuento = await DescuentoService.create(req.body);
      res.status(201).json(nuevoDescuento);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  },

  async update(req: Request, res: Response): Promise<void> {
    try {
      const descuentoActualizado = await DescuentoService.update(Number(req.params.id), req.body);
      res.json(descuentoActualizado);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  },

  async remove(req: Request, res: Response): Promise<void> {
    try {
      await DescuentoService.remove(Number(req.params.id));
      res.status(204).send();
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
};

export default descuentoController;