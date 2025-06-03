import { Request, Response } from 'express';
import ItemOrdenService from '../services/itemOrdenService';

const itemOrdenController = {
  async getAll(req: Request, res: Response): Promise<void> {
    try {
      const items = await ItemOrdenService.getAll();
      res.json(items);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  async getById(req: Request, res: Response): Promise<void> {
    try {
      const item = await ItemOrdenService.getById(Number(req.params.id));
      if (!item) {
        res.status(404).json({ error: 'ItemOrden no encontrado' });
        return;
      }
      res.json(item);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  async create(req: Request, res: Response): Promise<void> {
    try {
      const nuevoItem = await ItemOrdenService.create(req.body);
      res.status(201).json(nuevoItem);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  },

  async update(req: Request, res: Response): Promise<void> {
    try {
      const itemActualizado = await ItemOrdenService.update(Number(req.params.id), req.body);
      res.json(itemActualizado);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  },

  async remove(req: Request, res: Response): Promise<void> {
    try {
      await ItemOrdenService.remove(Number(req.params.id));
      res.status(204).send();
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
};

export default itemOrdenController;