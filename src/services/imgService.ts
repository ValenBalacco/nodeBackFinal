import ImgModel from '../models/Img';
import { Img } from '@prisma/client';

type ImgData = Omit<Img, 'id'>;

const ImgService = {
  async getAll() {
    return ImgModel.findAll();
  },

  async getById(id: number) {
    return ImgModel.findById(id);
  },

  async create(data: ImgData) {
    return ImgModel.create(data);
  },

  async update(id: number, data: Partial<ImgData>) {
    return ImgModel.update(id, data);
  },

  async remove(id: number) {
    return ImgModel.delete(id);
  }
};

export default ImgService;