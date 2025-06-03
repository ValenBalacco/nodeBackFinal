import { PrismaClient, Producto, Categoria, Detalle, ItemOrden } from '@prisma/client';

const prisma = new PrismaClient();

class ProductoModel {
  static async findAll(): Promise<(Producto & { categoria: Categoria; detalles: Detalle[]; itemsOrden: ItemOrden[] })[]> {
    return prisma.producto.findMany({
      include: {
        categoria: true,
        detalles: true,
        itemsOrden: true
      }
    });
  }

  static async findById(id: number, options = {}) {
    return prisma.producto.findUnique({
      where: { id },
      ...options
    });
  }

  static async create(data: Omit<Producto, 'id'>): Promise<Producto> {
    return prisma.producto.create({
      data
    });
  }

  static async update(id: number, data: Partial<Producto>): Promise<Producto> {
    return prisma.producto.update({
      where: { id },
      data
    });
  }

  static async delete(id: number): Promise<Producto> {
    return prisma.producto.delete({
      where: { id }
    });
  }
}

export default ProductoModel;