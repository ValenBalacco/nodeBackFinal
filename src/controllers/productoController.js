const ProductoService = require('../services/productoService');

const productoController = {
  async getAll(req, res) {
    try {
      const productos = await ProductoService.getAll();
      res.json(productos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getById(req, res) {
    try {
      const producto = await ProductoService.getById(Number(req.params.id));
      if (!producto) return res.status(404).json({ error: 'Producto no encontrado' });
      res.json(producto);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async create(req, res) {
    try {
      const nuevoProducto = await ProductoService.create(req.body);
      res.status(201).json(nuevoProducto);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async update(req, res) {
    try {
      const productoActualizado = await ProductoService.update(Number(req.params.id), req.body);
      res.json(productoActualizado);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async remove(req, res) {
    try {
      await ProductoService.remove(Number(req.params.id));
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
};

module.exports = productoController;