import { PrismaClient, Talle, Detalle, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

class TalleModel {
  static async findAll(): Promise<(Talle & { detalles: Detalle[] })[]> {
    return prisma.talle.findMany({
      include: { detalles: true }
    });
  }

  static async findById(id: number): Promise<(Talle & { detalles: Detalle[] }) | null> {
    return prisma.talle.findUnique({
      where: { id },
      include: { detalles: true }
    });
  }

  static async create(data: Prisma.TalleCreateInput): Promise<Talle> {
    return prisma.talle.create({
      data
    });
  }

  static async update(id: number, data: Partial<Talle>): Promise<Talle> {
    return prisma.talle.update({
      where: { id },
      data
    });
  }

  static async delete(id: number): Promise<Talle> {
    return prisma.talle.delete({
      where: { id }
    });
  }
}

export default TalleModel;