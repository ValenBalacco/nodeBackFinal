const DescuentoService = require('../services/descuentoService');

const descuentoController = {
  async getAll(req, res) {
    try {
      const descuentos = await DescuentoService.getAll();
      res.json(descuentos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getById(req, res) {
    try {
      const descuento = await DescuentoService.getById(Number(req.params.id));
      if (!descuento) return res.status(404).json({ error: 'Descuento no encontrado' });
      res.json(descuento);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async create(req, res) {
    try {
      const nuevoDescuento = await DescuentoService.create(req.body);
      res.status(201).json(nuevoDescuento);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async update(req, res) {
    try {
      const descuentoActualizado = await DescuentoService.update(Number(req.params.id), req.body);
      res.json(descuentoActualizado);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async remove(req, res) {
    try {
      await DescuentoService.remove(Number(req.params.id));
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
};

module.exports = descuentoController;