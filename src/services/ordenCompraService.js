const OrdenCompraModel = require('../models/OrdenCompra');

const OrdenCompraService = {
  async getAll() {
    return OrdenCompraModel.findAll();
  },

  async getById(id) {
    return OrdenCompraModel.findById(id);
  },

  async create(data) {
    return OrdenCompraModel.create(data);
  },

  async update(id, data) {
    return OrdenCompraModel.update(id, data);
  },

  async remove(id) {
    return OrdenCompraModel.delete(id);
  }
};

module.exports = OrdenCompraService;