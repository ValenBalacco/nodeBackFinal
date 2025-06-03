import { Request, Response } from 'express';
import ImgService from '../services/imgService';

const imgController = {
  async getAll(req: Request, res: Response): Promise<void> {
    try {
      const imgs = await ImgService.getAll();
      res.json(imgs);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  async getById(req: Request, res: Response): Promise<void> {
    try {
      const img = await ImgService.getById(Number(req.params.id));
      if (!img) {
        res.status(404).json({ error: 'Imagen no encontrada' });
        return;
      }
      res.json(img);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  async create(req: Request, res: Response): Promise<void> {
    try {
      const nuevaImg = await ImgService.create(req.body);
      res.status(201).json(nuevaImg);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  },

  async update(req: Request, res: Response): Promise<void> {
    try {
      const imgActualizada = await ImgService.update(Number(req.params.id), req.body);
      res.json(imgActualizada);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  },

  async remove(req: Request, res: Response): Promise<void> {
    try {
      await ImgService.remove(Number(req.params.id));
      res.status(204).send();
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
};

export default imgController;