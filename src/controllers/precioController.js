const PrecioService = require('../services/precioService');

const precioController = {
  async getAll(req, res) {
    try {
      const precios = await PrecioService.getAll();
      res.json(precios);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getById(req, res) {
    try {
      const precio = await PrecioService.getById(Number(req.params.id));
      if (!precio) return res.status(404).json({ error: 'Precio no encontrado' });
      res.json(precio);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async create(req, res) {
    try {
      const nuevoPrecio = await PrecioService.create(req.body);
      res.status(201).json(nuevoPrecio);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async update(req, res) {
    try {
      const precioActualizado = await PrecioService.update(Number(req.params.id), req.body);
      res.json(precioActualizado);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async remove(req, res) {
    try {
      await PrecioService.remove(Number(req.params.id));
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
};

module.exports = precioController;