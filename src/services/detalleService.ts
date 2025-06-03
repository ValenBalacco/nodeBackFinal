import DetalleModel from '../models/Detalle';
import { Detalle } from '@prisma/client';

type DetalleData = Omit<Detalle, 'id'>;

const DetalleService = {
  async getAll() {
    return DetalleModel.findAll();
  },

  async getById(id: number) {
    return DetalleModel.findById(id);
  },

  async create(data: DetalleData) {
    return DetalleModel.create(data);
  },

  async update(id: number, data: Partial<DetalleData>) {
    return DetalleModel.update(id, data);
  },

  async remove(id: number) {
    return DetalleModel.delete(id);
  }
};

export default DetalleService;