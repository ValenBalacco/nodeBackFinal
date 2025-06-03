import ProductoModel from '../models/Producto';
import { Producto } from '@prisma/client';

type ProductoData = Omit<Producto, 'id'>;

const ProductoService = {
  async getAll() {
    return ProductoModel.findAll();
  },

  async getById(id: number) {
    return ProductoModel.findById(id);
  },

  async create(data: ProductoData) {
    return ProductoModel.create(data);
  },

  async update(id: number, data: Partial<ProductoData>) {
    return ProductoModel.update(id, data);
  },

  async remove(id: number) {
    return ProductoModel.delete(id);
  }
};

export default ProductoService;