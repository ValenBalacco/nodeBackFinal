import { PrismaClient, ItemOrden, OrdenCompra, Producto, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

class ItemOrdenModel {
  static async findAll(): Promise<(ItemOrden & { ordenCompra: OrdenCompra; producto: Producto })[]> {
    return prisma.itemOrden.findMany({
      include: {
        ordenCompra: true,
        producto: true
      }
    });
  }

  static async findById(id: number): Promise<(ItemOrden & { ordenCompra: OrdenCompra; producto: Producto }) | null> {
    return prisma.itemOrden.findUnique({
      where: { id },
      include: {
        ordenCompra: true,
        producto: true
      }
    });
  }

  static async create(data: Prisma.ItemOrdenUncheckedCreateInput): Promise<ItemOrden> {
    return prisma.itemOrden.create({
      data
    });
  }

  static async update(id: number, data: Partial<ItemOrden>): Promise<ItemOrden> {
    return prisma.itemOrden.update({
      where: { id },
      data
    });
  }

  static async delete(id: number): Promise<ItemOrden> {
    return prisma.itemOrden.delete({
      where: { id }
    });
  }
}

export default ItemOrdenModel;