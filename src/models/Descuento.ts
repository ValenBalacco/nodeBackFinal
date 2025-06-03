import { PrismaClient, Descuento, Precio } from '@prisma/client';

const prisma = new PrismaClient();

class DescuentoModel {
  static async findAll(): Promise<(Descuento & { precios: Precio[] })[]> {
    return prisma.descuento.findMany({
      include: { precios: true }
    });
  }

  static async findById(id: number): Promise<(Descuento & { precios: Precio[] }) | null> {
    return prisma.descuento.findUnique({
      where: { id },
      include: { precios: true }
    });
  }

  static async create(data: Omit<Descuento, 'id'>): Promise<Descuento> {
    return prisma.descuento.create({
      data
    });
  }

  static async update(id: number, data: Partial<Descuento>): Promise<Descuento> {
    return prisma.descuento.update({
      where: { id },
      data
    });
  }

  static async delete(id: number): Promise<Descuento> {
    return prisma.descuento.delete({
      where: { id }
    });
  }
}

export default DescuentoModel;