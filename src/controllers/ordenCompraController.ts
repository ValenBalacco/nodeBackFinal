import { Request, Response } from 'express';
import OrdenCompraService from '../services/ordenCompraService';
import ProductoService from '../services/productoService';

interface AuthRequest extends Request {
  user?: { id: number };
}

interface OrdenCompraController {
  getAll(req: Request, res: Response): Promise<void>;
  getById(req: Request, res: Response): Promise<void>;
  getByUsuario(req: Request, res: Response): Promise<void>;
  create(req: AuthRequest, res: Response): Promise<void>;
  update(req: Request, res: Response): Promise<void>;
  remove(req: Request, res: Response): Promise<void>;
}

const ordenCompraController: OrdenCompraController = {
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

  // NUEVO MÉTODO
  async getByUsuario(req: Request, res: Response): Promise<void> {
    try {
      const usuarioId = req.params.usuarioId;
      const ordenes = await OrdenCompraService.getByUsuario(usuarioId);
      res.json(ordenes);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  async create(req: AuthRequest, res: Response): Promise<void> {
    try {
      if (!req.user?.id) {
        res.status(401).json({ error: 'Usuario no autenticado' });
        return;
      }
      const usuarioId = String(req.user.id);
      const { items, direccionEnvioId } = req.body;

      let total = 0;

      type ProductoConDetalles = {
        id: number;
        nombre: string;
        categoriaId: number;
        tipoProducto: any;
        sexo: string;
        detalles?: {
          precio: number;
          precios?: { precioVenta: number }[];
        }[];
      };

      for (const item of items) {
        const producto = await ProductoService.getById(item.productoId, {
          include: {
            detalles: {
              include: { precios: true }
            }
          }
        }) as ProductoConDetalles;

        if (!producto || !producto.detalles || producto.detalles.length === 0) {
          res.status(400).json({ error: `Producto con id ${item.productoId} o su detalle no encontrado` });
          return;
        }
        const detalle = producto.detalles[0];
        const precio = detalle.precios && detalle.precios[0] ? detalle.precios[0].precioVenta : detalle.precio;

        if (typeof precio !== 'number' || isNaN(precio)) {
          res.status(400).json({ error: `El producto con id ${item.productoId} no tiene precio válido` });
          return;
        }
        total += precio * item.cantidad;
      }

      if (isNaN(total)) {
        res.status(400).json({ error: 'El total de la orden no es válido.' });
        return;
      }

      const data = {
        usuarioId,
        direccionEnvioId,
        total,
        descuento: 0,
        fechaCompra: new Date().toISOString(),
        items: { create: items }
      };

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