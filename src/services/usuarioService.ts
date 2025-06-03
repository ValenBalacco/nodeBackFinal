import UsuarioModel from '../models/Usuario';
import { Prisma } from '@prisma/client';

const UsuarioService = {
  async getAll() {
    return UsuarioModel.findAll();
  },

  async getById(id: string) {
    return UsuarioModel.findById(id);
  },

  async findByEmail(email: string) {
    return UsuarioModel.findByEmail(email);
  },

  async create(data: Prisma.UsuarioCreateInput) {
    return UsuarioModel.create(data);
  },

  async update(id: string, data: Prisma.UsuarioUpdateInput) {
    return UsuarioModel.update(id, data);
  },

  async remove(id: string) {
    return UsuarioModel.delete(id);
  }
};

export default UsuarioService;