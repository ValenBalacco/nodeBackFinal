import ItemOrdenModel from '../models/ItemOrden';
import { ItemOrden } from '@prisma/client';

type ItemOrdenData = Omit<ItemOrden, 'id'>;

const ItemOrdenService = {
  async getAll() {
    return ItemOrdenModel.findAll();
  },

  async getById(id: number) {
    return ItemOrdenModel.findById(id);
  },

  async create(data: ItemOrdenData) {
    return ItemOrdenModel.create(data);
  },

  async update(id: number, data: Partial<ItemOrdenData>) {
    return ItemOrdenModel.update(id, data);
  },

  async remove(id: number) {
    return ItemOrdenModel.delete(id);
  }
};

export default ItemOrdenService;