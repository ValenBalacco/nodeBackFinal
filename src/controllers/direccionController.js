const DireccionService = require('../services/direccionService');

const direccionController = {
  async getAll(req, res) {
    try {
      const direcciones = await DireccionService.getAll();
      res.json(direcciones);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getById(req, res) {
    try {
      const direccion = await DireccionService.getById(Number(req.params.id));
      if (!direccion) return res.status(404).json({ error: 'Dirección no encontrada' });
      res.json(direccion);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async create(req, res) {
    try {
      const nuevaDireccion = await DireccionService.create(req.body);
      res.status(201).json(nuevaDireccion);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async update(req, res) {
    try {
      const direccionActualizada = await DireccionService.update(Number(req.params.id), req.body);
      res.json(direccionActualizada);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async remove(req, res) {
    try {
      await DireccionService.remove(Number(req.params.id));
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
};

module.exports = direccionController;