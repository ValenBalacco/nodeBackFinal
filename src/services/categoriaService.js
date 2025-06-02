const CategoriaModel = require('../models/Categoria');

const CategoriaService = {
  async getAll() {
    return CategoriaModel.findAll();
  },

  async getById(id) {
    return CategoriaModel.findById(id);
  },

  async create(data) {
    return CategoriaModel.create(data);
  },

  async update(id, data) {
    return CategoriaModel.update(id, data);
  },

  async remove(id) {
    return CategoriaModel.delete(id);
  }
};

module.exports = CategoriaService;