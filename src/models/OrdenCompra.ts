import { PrismaClient, Prisma, OrdenCompra } from '@prisma/client';

const prisma = new PrismaClient();

class OrdenCompraModel {
  static async findAll() {
    return prisma.ordenCompra.findMany({
      include: {
        usuario: true,
        direccionEnvio: true,
        items: true
      }
    });
  }

  static async findById(id: number) {
    return prisma.ordenCompra.findUnique({
      where: { id },
      include: {
        usuario: true,
        direccionEnvio: true,
        items: true
      }
    });
  }

  static async findByUsuario(usuarioId: string) { // NUEVO
    return prisma.ordenCompra.findMany({
      where: { usuarioId },
      include: {
        usuario: true,
        direccionEnvio: true,
        items: true
      },
      orderBy: { fechaCompra: 'desc' }
    });
  }

  static async create(data: Prisma.OrdenCompraUncheckedCreateInput & { items?: { create: any[] } }): Promise<OrdenCompra> {
    return prisma.ordenCompra.create({
      data
    });
  }

  static async update(id: number, data: Partial<OrdenCompra>): Promise<OrdenCompra> {
    return prisma.ordenCompra.update({
      where: { id },
      data
    });
  }

  static async delete(id: number): Promise<OrdenCompra> {
    return prisma.ordenCompra.delete({
      where: { id }
    });
  }
}

export default OrdenCompraModel;