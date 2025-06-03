import DescuentoModel from '../models/Descuento';
import { Descuento } from '@prisma/client';

type DescuentoData = Omit<Descuento, 'id'>;

const DescuentoService = {
  async getAll() {
    return DescuentoModel.findAll();
  },

  async getById(id: number) {
    return DescuentoModel.findById(id);
  },

  async create(data: DescuentoData) {
    return DescuentoModel.create(data);
  },

  async update(id: number, data: Partial<DescuentoData>) {
    return DescuentoModel.update(id, data);
  },

  async remove(id: number) {
    return DescuentoModel.delete(id);
  }
};

export default DescuentoService;