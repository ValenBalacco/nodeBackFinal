const TalleService = require('../services/talleService');

const talleController = {
  async getAll(req, res) {
    try {
      const talles = await TalleService.getAll();
      res.json(talles);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getById(req, res) {
    try {
      const talle = await TalleService.getById(Number(req.params.id));
      if (!talle) return res.status(404).json({ error: 'Talle no encontrado' });
      res.json(talle);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async create(req, res) {
    try {
      const nuevoTalle = await TalleService.create(req.body);
      res.status(201).json(nuevoTalle);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async update(req, res) {
    try {
      const talleActualizado = await TalleService.update(Number(req.params.id), req.body);
      res.json(talleActualizado);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async remove(req, res) {
    try {
      await TalleService.remove(Number(req.params.id));
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
};

module.exports = talleController;