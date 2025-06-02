const UsuarioDireccionModel = require('../models/UsuarioDireccion');

const UsuarioDireccionService = {
  async getAll() {
    return UsuarioDireccionModel.findAll();
  },

  async getById(id) {
    return UsuarioDireccionModel.findById(id);
  },

  async create(data) {
    return UsuarioDireccionModel.create(data);
  },

  async update(id, data) {
    return UsuarioDireccionModel.update(id, data);
  },

  async remove(id) {
    return UsuarioDireccionModel.delete(id);
  }
};

module.exports = UsuarioDireccionService;