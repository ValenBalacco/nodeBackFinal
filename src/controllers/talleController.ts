import { Request, Response } from 'express';
import TalleService from '../services/talleService';

const talleController = {
  async getAll(req: Request, res: Response): Promise<void> {
    try {
      const talles = await TalleService.getAll();
      res.json(talles);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  async getById(req: Request, res: Response): Promise<void> {
    try {
      const talle = await TalleService.getById(Number(req.params.id));
      if (!talle) {
        res.status(404).json({ error: 'Talle no encontrado' });
        return;
      }
      res.json(talle);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  async create(req: Request, res: Response): Promise<void> {
    try {
      const nuevoTalle = await TalleService.create(req.body);
      res.status(201).json(nuevoTalle);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  },

  async update(req: Request, res: Response): Promise<void> {
    try {
      const talleActualizado = await TalleService.update(Number(req.params.id), req.body);
      res.json(talleActualizado);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  },

  async remove(req: Request, res: Response): Promise<void> {
    try {
      await TalleService.remove(Number(req.params.id));
      res.status(204).send();
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
};

export default talleController;