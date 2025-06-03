import { PrismaClient, Img, Detalle } from '@prisma/client';

const prisma = new PrismaClient();

class ImgModel {
  static async findAll(): Promise<(Img & { detalle: Detalle | null })[]> {
    return prisma.img.findMany({
      include: { detalle: true }
    });
  }

  static async findById(id: number): Promise<(Img & { detalle: Detalle | null }) | null> {
    return prisma.img.findUnique({
      where: { id },
      include: { detalle: true }
    });
  }

  static async create(data: Omit<Img, 'id'>): Promise<Img> {
    return prisma.img.create({
      data
    });
  }

  static async update(id: number, data: Partial<Img>): Promise<Img> {
    return prisma.img.update({
      where: { id },
      data
    });
  }

  static async delete(id: number): Promise<Img> {
    return prisma.img.delete({
      where: { id }
    });
  }
}

export default ImgModel;