const ItemOrdenService = require('../services/itemOrdenService');

const itemOrdenController = {
  async getAll(req, res) {
    try {
      const items = await ItemOrdenService.getAll();
      res.json(items);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getById(req, res) {
    try {
      const item = await ItemOrdenService.getById(Number(req.params.id));
      if (!item) return res.status(404).json({ error: 'ItemOrden no encontrado' });
      res.json(item);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async create(req, res) {
    try {
      const nuevoItem = await ItemOrdenService.create(req.body);
      res.status(201).json(nuevoItem);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async update(req, res) {
    try {
      const itemActualizado = await ItemOrdenService.update(Number(req.params.id), req.body);
      res.json(itemActualizado);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async remove(req, res) {
    try {
      await ItemOrdenService.remove(Number(req.params.id));
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
};

module.exports = itemOrdenController;