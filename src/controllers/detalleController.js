const DetalleService = require('../services/detalleService');

const detalleController = {
  async getAll(req, res) {
    try {
      const detalles = await DetalleService.getAll();
      res.json(detalles);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getById(req, res) {
    try {
      const detalle = await DetalleService.getById(Number(req.params.id));
      if (!detalle) return res.status(404).json({ error: 'Detalle no encontrado' });
      res.json(detalle);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async create(req, res) {
    try {
      const nuevoDetalle = await DetalleService.create(req.body);
      res.status(201).json(nuevoDetalle);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async update(req, res) {
    try {
      const detalleActualizado = await DetalleService.update(Number(req.params.id), req.body);
      res.json(detalleActualizado);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async remove(req, res) {
    try {
      await DetalleService.remove(Number(req.params.id));
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
};

module.exports = detalleController;