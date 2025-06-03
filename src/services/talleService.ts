import TalleModel from '../models/Talle';
import { Talle } from '@prisma/client';

type TalleData = Omit<Talle, 'id'>;

const TalleService = {
  async getAll() {
    return TalleModel.findAll();
  },

  async getById(id: number) {
    return TalleModel.findById(id);
  },

  async create(data: TalleData) {
    return TalleModel.create(data);
  },

  async update(id: number, data: Partial<TalleData>) {
    return TalleModel.update(id, data);
  },

  async remove(id: number) {
    return TalleModel.delete(id);
  }
};

export default TalleService;