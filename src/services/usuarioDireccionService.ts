import UsuarioDireccionModel from '../models/UsuarioDireccion';
import { UsuarioDireccion } from '@prisma/client';

type UsuarioDireccionData = Omit<UsuarioDireccion, 'id'>;

const UsuarioDireccionService = {
  async getAll() {
    return UsuarioDireccionModel.findAll();
  },

  async getById(id: number) {
    return UsuarioDireccionModel.findById(id);
  },

  async create(data: UsuarioDireccionData) {
    return UsuarioDireccionModel.create(data);
  },

  async update(id: number, data: Partial<UsuarioDireccionData>) {
    return UsuarioDireccionModel.update(id, data);
  },

  async remove(id: number) {
    return UsuarioDireccionModel.delete(id);
  }
};

export default UsuarioDireccionService;