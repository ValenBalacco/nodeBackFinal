const PrecioModel = require('../models/Precio');

const PrecioService = {
  async getAll() {
    return PrecioModel.findAll();
  },

  async getById(id) {
    return PrecioModel.findById(id);
  },

  async create(data) {
    return PrecioModel.create(data);
  },

  async update(id, data) {
    return PrecioModel.update(id, data);
  },

  async remove(id) {
    return PrecioModel.delete(id);
  }
};

module.exports = PrecioService;