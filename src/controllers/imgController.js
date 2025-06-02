const ImgService = require('../services/imgService');

const imgController = {
  async getAll(req, res) {
    try {
      const imgs = await ImgService.getAll();
      res.json(imgs);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getById(req, res) {
    try {
      const img = await ImgService.getById(Number(req.params.id));
      if (!img) return res.status(404).json({ error: 'Imagen no encontrada' });
      res.json(img);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async create(req, res) {
    try {
      const nuevaImg = await ImgService.create(req.body);
      res.status(201).json(nuevaImg);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async update(req, res) {
    try {
      const imgActualizada = await ImgService.update(Number(req.params.id), req.body);
      res.json(imgActualizada);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async remove(req, res) {
    try {
      await ImgService.remove(Number(req.params.id));
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
};

module.exports = imgController;