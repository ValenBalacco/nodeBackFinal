import { PrismaClient, Usuario, OrdenCompra, UsuarioDireccion, Direccion, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

class UsuarioModel {
  static async findAll() {
    return prisma.usuario.findMany({
      include: {
        direcciones: {
          include: {
            direccion: true
          }
        },
        ordenes: true
      }
    });
  }

  static async findById(id: string) {
    return prisma.usuario.findUnique({
      where: { id },
      include: {
        direcciones: {
          include: {
            direccion: true
          }
        },
        ordenes: true
      }
    });
  }

  static async findByEmail(email: string): Promise<Usuario | null> {
    return prisma.usuario.findUnique({
      where: { email }
    });
  }

  static async create(data: Prisma.UsuarioCreateInput): Promise<Usuario> {
    return prisma.usuario.create({
      data
    });
  }

  static async update(id: string, data: Prisma.UsuarioUpdateInput): Promise<Usuario> {
    return prisma.usuario.update({
      where: { id },
      data
    });
  }

  static async delete(id: string): Promise<Usuario> {
    return prisma.usuario.delete({
      where: { id }
    });
  }
}

export default UsuarioModel;