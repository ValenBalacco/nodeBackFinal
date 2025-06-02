const CategoriaService = require('../services/categoriaService');

const categoriaController = {
  async getAll(req, res) {
    try {
      const categorias = await CategoriaService.getAll();
      res.json(categorias);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getById(req, res) {
    try {
      const categoria = await CategoriaService.getById(Number(req.params.id));
      if (!categoria) return res.status(404).json({ error: 'Categoría no encontrada' });
      res.json(categoria);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async create(req, res) {
    try {
      const nuevaCategoria = await CategoriaService.create(req.body);
      res.status(201).json(nuevaCategoria);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async update(req, res) {
    try {
      const categoriaActualizada = await CategoriaService.update(Number(req.params.id), req.body);
      res.json(categoriaActualizada);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async remove(req, res) {
    try {
      await CategoriaService.remove(Number(req.params.id));
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
};

module.exports = categoriaController;