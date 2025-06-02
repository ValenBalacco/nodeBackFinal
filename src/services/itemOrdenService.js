const ItemOrdenModel = require('../models/ItemOrden');

const ItemOrdenService = {
  async getAll() {
    return ItemOrdenModel.findAll();
  },

  async getById(id) {
    return ItemOrdenModel.findById(id);
  },

  async create(data) {
    return ItemOrdenModel.create(data);
  },

  async update(id, data) {
    return ItemOrdenModel.update(id, data);
  },

  async remove(id) {
    return ItemOrdenModel.delete(id);
  }
};

module.exports = ItemOrdenService;