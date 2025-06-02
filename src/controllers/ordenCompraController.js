const OrdenCompraService = require('../services/ordenCompraService');

const ordenCompraController = {
  async getAll(req, res) {
    try {
      const ordenes = await OrdenCompraService.getAll();
      res.json(ordenes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getById(req, res) {
    try {
      const orden = await OrdenCompraService.getById(Number(req.params.id));
      if (!orden) return res.status(404).json({ error: 'Orden de compra no encontrada' });
      res.json(orden);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async create(req, res) {
    try {
      // Toma el usuarioId del usuario logeado
      const usuarioId = req.user.id;
      const data = { ...req.body, usuarioId };
      const nuevaOrden = await OrdenCompraService.create(data);
      res.status(201).json(nuevaOrden);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async update(req, res) {
    try {
      const ordenActualizada = await OrdenCompraService.update(Number(req.params.id), req.body);
      res.json(ordenActualizada);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async remove(req, res) {
    try {
      await OrdenCompraService.remove(Number(req.params.id));
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
};

module.exports = ordenCompraController;