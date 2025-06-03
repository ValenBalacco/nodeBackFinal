import OrdenCompraModel from '../models/OrdenCompra';
import { OrdenCompra } from '@prisma/client';

type OrdenCompraData = Omit<OrdenCompra, 'id'>;

const OrdenCompraService = {
  async getAll() {
    return OrdenCompraModel.findAll();
  },

  async getById(id: number) {
    return OrdenCompraModel.findById(id);
  },

  async create(data: OrdenCompraData) {
    return OrdenCompraModel.create(data);
  },

  async update(id: number, data: Partial<OrdenCompraData>) {
    return OrdenCompraModel.update(id, data);
  },

  async remove(id: number) {
    return OrdenCompraModel.delete(id);
  }
};

export default OrdenCompraService;