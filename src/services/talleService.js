const TalleModel = require('../models/Talle');

const TalleService = {
  async getAll() {
    return TalleModel.findAll();
  },

  async getById(id) {
    return TalleModel.findById(id);
  },

  async create(data) {
    return TalleModel.create(data);
  },

  async update(id, data) {
    return TalleModel.update(id, data);
  },

  async remove(id) {
    return TalleModel.delete(id);
  }
};

module.exports = TalleService;