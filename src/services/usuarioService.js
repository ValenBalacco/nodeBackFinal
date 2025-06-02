const UsuarioModel = require('../models/Usuario');

const UsuarioService = {
  async getAll() {
    return UsuarioModel.findAll();
  },

  async getById(id) {
    return UsuarioModel.findById(id);
  },

  async findByEmail(email) {
    return UsuarioModel.findByEmail(email);
  },

  async create(data) {
    return UsuarioModel.create(data);
  },

  async update(id, data) {
    return UsuarioModel.update(id, data);
  },

  async remove(id) {
    return UsuarioModel.delete(id);
  }
};

module.exports = UsuarioService;