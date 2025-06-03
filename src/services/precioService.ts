import PrecioModel from '../models/Precio';
import { Precio } from '@prisma/client';

type PrecioData = Omit<Precio, 'id'>;

const PrecioService = {
  async getAll() {
    return PrecioModel.findAll();
  },

  async getById(id: number) {
    return PrecioModel.findById(id);
  },

  async create(data: PrecioData) {
    return PrecioModel.create(data);
  },

  async update(id: number, data: Partial<PrecioData>) {
    return PrecioModel.update(id, data);
  },

  async remove(id: number) {
    return PrecioModel.delete(id);
  }
};

export default PrecioService;