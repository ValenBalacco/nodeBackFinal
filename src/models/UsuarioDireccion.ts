import { PrismaClient, UsuarioDireccion, Usuario, Direccion, OrdenCompra } from '@prisma/client';

const prisma = new PrismaClient();

class UsuarioDireccionModel {
  static async findAll(): Promise<(UsuarioDireccion & { usuario: Usuario; direccion: Direccion; ordenesEnvio: OrdenCompra[] })[]> {
    return prisma.usuarioDireccion.findMany({
      include: {
        usuario: true,
        direccion: true,
        ordenesEnvio: true
      }
    });
  }

  static async findById(id: number): Promise<(UsuarioDireccion & { usuario: Usuario; direccion: Direccion; ordenesEnvio: OrdenCompra[] }) | null> {
    return prisma.usuarioDireccion.findUnique({
      where: { id },
      include: {
        usuario: true,
        direccion: true,
        ordenesEnvio: true
      }
    });
  }

  static async create(data: Omit<UsuarioDireccion, 'id'>): Promise<UsuarioDireccion> {
    return prisma.usuarioDireccion.create({
      data
    });
  }

  static async update(id: number, data: Partial<UsuarioDireccion>): Promise<UsuarioDireccion> {
    return prisma.usuarioDireccion.update({
      where: { id },
      data
    });
  }

  static async delete(id: number): Promise<UsuarioDireccion> {
    return prisma.usuarioDireccion.delete({
      where: { id }
    });
  }
}

export default UsuarioDireccionModel;