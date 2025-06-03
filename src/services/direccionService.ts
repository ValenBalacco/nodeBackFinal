import DireccionModel from '../models/Direccion';
import { Direccion } from '@prisma/client';

type DireccionData = Omit<Direccion, 'id'>;

const DireccionService = {
  async getAll() {
    return DireccionModel.findAll();
  },

  async getById(id: number) {
    return DireccionModel.findById(id);
  },

  async create(data: DireccionData) {
    return DireccionModel.create(data);
  },

  async update(id: number, data: Partial<DireccionData>) {
    return DireccionModel.update(id, data);
  },

  async remove(id: number) {
    return DireccionModel.delete(id);
  }
};

export default DireccionService;