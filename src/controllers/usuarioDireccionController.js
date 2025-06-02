const UsuarioDireccionService = require('../services/usuarioDireccionService');

const usuarioDireccionController = {
  async getAll(req, res) {
    try {
      const direcciones = await UsuarioDireccionService.getAll();
      res.json(direcciones);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getById(req, res) {
    try {
      const direccion = await UsuarioDireccionService.getById(Number(req.params.id));
      if (!direccion) return res.status(404).json({ error: 'UsuarioDireccion no encontrada' });
      res.json(direccion);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async create(req, res) {
    try {

      const usuarioId = req.user.id;
      const data = { ...req.body, usuarioId };
      const nuevaDireccion = await UsuarioDireccionService.create(data);
      res.status(201).json(nuevaDireccion);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async update(req, res) {
    try {
      const direccionActualizada = await UsuarioDireccionService.update(Number(req.params.id), req.body);
      res.json(direccionActualizada);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async remove(req, res) {
    try {
      await UsuarioDireccionService.remove(Number(req.params.id));
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
};

module.exports = usuarioDireccionController;