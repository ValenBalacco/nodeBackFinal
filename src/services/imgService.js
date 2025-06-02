const ImgModel = require('../models/Img');

const ImgService = {
  async getAll() {
    return ImgModel.findAll();
  },

  async getById(id) {
    return ImgModel.findById(id);
  },

  async create(data) {
    return ImgModel.create(data);
  },

  async update(id, data) {
    return ImgModel.update(id, data);
  },

  async remove(id) {
    return ImgModel.delete(id);
  }
};

module.exports = ImgService;