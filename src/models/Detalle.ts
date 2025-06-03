import { PrismaClient, Detalle, Producto, Talle, Img, Precio } from '@prisma/client';

const prisma = new PrismaClient();

class DetalleModel {
  static async findAll(): Promise<(Detalle & { producto: Producto; talle: Talle; imgs: Img[]; precios: Precio[] })[]> {
    return prisma.detalle.findMany({
      include: {
        producto: true,
        talle: true,
        imgs: true,
        precios: true
      }
    });
  }

  static async findById(id: number): Promise<(Detalle & { producto: Producto; talle: Talle; imgs: Img[]; precios: Precio[] }) | null> {
    return prisma.detalle.findUnique({
      where: { id },
      include: {
        producto: true,
        talle: true,
        imgs: true,
        precios: true
      }
    });
  }

  static async create(data: Omit<Detalle, 'id'>): Promise<Detalle> {
    return prisma.detalle.create({
      data
    });
  }

  static async update(id: number, data: Partial<Detalle>): Promise<Detalle> {
    return prisma.detalle.update({
      where: { id },
      data
    });
  }

  static async delete(id: number): Promise<Detalle> {
    return prisma.detalle.delete({
      where: { id }
    });
  }
}

export default DetalleModel;