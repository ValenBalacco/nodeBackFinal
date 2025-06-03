import { PrismaClient, Direccion, UsuarioDireccion, Usuario } from '@prisma/client';

const prisma = new PrismaClient();

class DireccionModel {
  static async findAll(): Promise<(Direccion & { usuarios: (UsuarioDireccion & { usuario: Usuario })[] })[]> {
    return prisma.direccion.findMany({
      include: {
        usuarios: {
          include: {
            usuario: true
          }
        }
      }
    });
  }

  static async findById(id: number): Promise<(Direccion & { usuarios: (UsuarioDireccion & { usuario: Usuario })[] }) | null> {
    return prisma.direccion.findUnique({
      where: { id },
      include: {
        usuarios: {
          include: {
            usuario: true
          }
        }
      }
    });
  }

  static async create(data: Omit<Direccion, 'id'>): Promise<Direccion> {
    return prisma.direccion.create({
      data
    });
  }

  static async update(id: number, data: Partial<Direccion>): Promise<Direccion> {
    return prisma.direccion.update({
      where: { id },
      data
    });
  }

  static async delete(id: number): Promise<Direccion> {
    return prisma.direccion.delete({
      where: { id }
    });
  }
}

export default DireccionModel;