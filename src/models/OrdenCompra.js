const { PrismaClient } = require('@prisma/client');
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

  static async findById(id) {
    return prisma.ordenCompra.findUnique({
      where: { id },
      include: {
        usuario: true,
        direccionEnvio: true,
        items: true
      }
    });
  }

  static async create(data) {
    return prisma.ordenCompra.create({
      data
    });
  }

  static async update(id, data) {
    return prisma.ordenCompra.update({
      where: { id },
      data
    });
  }

  static async delete(id) {
    return prisma.ordenCompra.delete({
      where: { id }
    });
  }
}

module.exports = OrdenCompraModel;