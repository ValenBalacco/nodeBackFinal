import { PrismaClient, Categoria, Producto } from '@prisma/client';

const prisma = new PrismaClient();

class CategoriaModel {
  static async findAll(): Promise<(Categoria & { productos: Producto[] })[]> {
    return prisma.categoria.findMany({
      include: { productos: true }
    });
  }

  static async findById(id: number): Promise<(Categoria & { productos: Producto[] }) | null> {
    return prisma.categoria.findUnique({
      where: { id },
      include: { productos: true }
    });
  }

  static async create(data: Omit<Categoria, 'id'>): Promise<Categoria> {
    return prisma.categoria.create({ data });
  }

  static async update(id: number, data: Partial<Categoria>): Promise<Categoria> {
    return prisma.categoria.update({
      where: { id },
      data
    });
  }

  static async delete(id: number): Promise<Categoria> {
    return prisma.categoria.delete({
      where: { id }
    });
  }
}

export default CategoriaModel;