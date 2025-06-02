const DetalleModel = require('../models/Detalle');

const DetalleService = {
  async getAll() {
    return DetalleModel.findAll();
  },

  async getById(id) {
    return DetalleModel.findById(id);
  },

  async create(data) {
    return DetalleModel.create(data);
  },

  async update(id, data) {
    return DetalleModel.update(id, data);
  },

  async remove(id) {
    return DetalleModel.delete(id);
  }
};

module.exports = DetalleService;