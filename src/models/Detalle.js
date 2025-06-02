const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class DetalleModel {
  static async findAll() {
    return prisma.detalle.findMany({
      include: {
        producto: true,
        talle: true,
        imgs: true,
        precios: true
      }
    });
  }

  static async findById(id) {
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

  static async create(data) {
    return prisma.detalle.create({
      data
    });
  }

  static async update(id, data) {
    return prisma.detalle.update({
      where: { id },
      data
    });
  }

  static async delete(id) {
    return prisma.detalle.delete({
      where: { id }
    });
  }
}

module.exports = DetalleModel;