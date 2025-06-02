const DireccionModel = require('../models/Direccion');

const DireccionService = {
  async getAll() {
    return DireccionModel.findAll();
  },

  async getById(id) {
    return DireccionModel.findById(id);
  },

  async create(data) {
    return DireccionModel.create(data);
  },

  async update(id, data) {
    return DireccionModel.update(id, data);
  },

  async remove(id) {
    return DireccionModel.delete(id);
  }
};

module.exports = DireccionService;