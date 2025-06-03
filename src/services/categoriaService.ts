import CategoriaModel from '../models/Categoria';
import { Categoria } from '@prisma/client';

type CategoriaData = Omit<Categoria, 'id'>;

const CategoriaService = {
  async getAll() {
    return CategoriaModel.findAll();
  },

  async getById(id: number) {
    return CategoriaModel.findById(id);
  },

  async create(data: CategoriaData) {
    return CategoriaModel.create(data);
  },

  async update(id: number, data: Partial<CategoriaData>) {
    return CategoriaModel.update(id, data);
  },

  async remove(id: number) {
    return CategoriaModel.delete(id);
  }
};

export default CategoriaService;