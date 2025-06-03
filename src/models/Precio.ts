import { PrismaClient, Precio, Detalle, Descuento } from '@prisma/client';

const prisma = new PrismaClient();

class PrecioModel {
  static async findAll(): Promise<(Precio & { detalle: Detalle; descuento: Descuento | null })[]> {
    return prisma.precio.findMany({
      include: {
        detalle: true,
        descuento: true
      }
    });
  }

  static async findById(id: number): Promise<(Precio & { detalle: Detalle; descuento: Descuento | null }) | null> {
    return prisma.precio.findUnique({
      where: { id },
      include: {
        detalle: true,
        descuento: true
      }
    });
  }

  static async create(data: Omit<Precio, 'id'>): Promise<Precio> {
    return prisma.precio.create({
      data
    });
  }

  static async update(id: number, data: Partial<Precio>): Promise<Precio> {
    return prisma.precio.update({
      where: { id },
      data
    });
  }

  static async delete(id: number): Promise<Precio> {
    return prisma.precio.delete({
      where: { id }
    });
  }
}

export default PrecioModel;