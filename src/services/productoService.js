const ProductoModel = require('../models/Producto');

const ProductoService = {
  async getAll() {
    return ProductoModel.findAll();
  },

  async getById(id) {
    return ProductoModel.findById(id);
  },

  async create(data) {
    return ProductoModel.create(data);
  },

  async update(id, data) {
    return ProductoModel.update(id, data);
  },

  async remove(id) {
    return ProductoModel.delete(id);
  }
};

module.exports = ProductoService;