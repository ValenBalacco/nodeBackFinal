import { Request, Response } from 'express';
import ProductoService from '../services/productoService';

const productoController = {
  async getAll(req: Request, res: Response): Promise<void> {
    try {
      const productos = await ProductoService.getAll();
      res.json(productos);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  async getById(req: Request, res: Response): Promise<void> {
    try {
      const producto = await ProductoService.getById(Number(req.params.id), { include: { detalles: true } });
      if (!producto) {
        res.status(404).json({ error: 'Producto no encontrado' });
        return;
      }
      res.json(producto);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  async create(req: Request, res: Response): Promise<void> {
    try {
      const nuevoProducto = await ProductoService.create(req.body);
      res.status(201).json(nuevoProducto);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  },

  async update(req: Request, res: Response): Promise<void> {
    try {
      const productoActualizado = await ProductoService.update(Number(req.params.id), req.body);
      res.json(productoActualizado);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  },

  async remove(req: Request, res: Response): Promise<void> {
    try {
      await ProductoService.remove(Number(req.params.id));
      res.status(204).send();
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
};

export default productoController;