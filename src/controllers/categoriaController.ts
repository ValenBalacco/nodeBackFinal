import { Request, Response } from 'express';
import CategoriaService from '../services/categoriaService';

const categoriaController = {
  async getAll(req: Request, res: Response): Promise<void> {
    try {
      const categorias = await CategoriaService.getAll();
      res.json(categorias);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  async getById(req: Request, res: Response): Promise<void> {
    try {
      const categoria = await CategoriaService.getById(Number(req.params.id));
      if (!categoria) {
        res.status(404).json({ error: 'Categoría no encontrada' });
        return;
      }
      res.json(categoria);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  async create(req: Request, res: Response): Promise<void> {
    try {
      const nuevaCategoria = await CategoriaService.create(req.body);
      res.status(201).json(nuevaCategoria);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  },

  async update(req: Request, res: Response): Promise<void> {
    try {
      const categoriaActualizada = await CategoriaService.update(Number(req.params.id), req.body);
      res.json(categoriaActualizada);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  },

  async remove(req: Request, res: Response): Promise<void> {
    try {
      await CategoriaService.remove(Number(req.params.id));
      res.status(204).send();
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
};

export default categoriaController;