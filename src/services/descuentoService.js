const DescuentoModel = require('../models/Descuento');

const DescuentoService = {
  async getAll() {
    return DescuentoModel.findAll();
  },

  async getById(id) {
    return DescuentoModel.findById(id);
  },

  async create(data) {
    return DescuentoModel.create(data);
  },

  async update(id, data) {
    return DescuentoModel.update(id, data);
  },

  async remove(id) {
    return DescuentoModel.delete(id);
  }
};

module.exports = DescuentoService;