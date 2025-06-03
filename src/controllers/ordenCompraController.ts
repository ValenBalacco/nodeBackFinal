import { Request, Response } from 'express';
import OrdenCompraService from '../services/ordenCompraService';

interface AuthRequest extends Request {
  user?: { id: number };
}

const ordenCompraController = {
  async getAll(req: Request, res: Response): Promise<void> {
    try {
      const ordenes = await OrdenCompraService.getAll();
      res.json(ordenes);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  async getById(req: Request, res: Response): Promise<void> {
    try {
      const orden = await OrdenCompraService.getById(Number(req.params.id));
      if (!orden) {
        res.status(404).json({ error: 'Orden de compra no encontrada' });
        return;
      }
      res.json(orden);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  async create(req: AuthRequest, res: Response): Promise<void> {
    try {
      const usuarioId = req.user?.id;
      const data = { ...req.body, usuarioId };
      const nuevaOrden = await OrdenCompraService.create(data);
      res.status(201).json(nuevaOrden);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  },

  async update(req: Request, res: Response): Promise<void> {
    try {
      const ordenActualizada = await OrdenCompraService.update(Number(req.params.id), req.body);
      res.json(ordenActualizada);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  },

  async remove(req: Request, res: Response): Promise<void> {
    try {
      await OrdenCompraService.remove(Number(req.params.id));
      res.status(204).send();
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
};

export default ordenCompraController;