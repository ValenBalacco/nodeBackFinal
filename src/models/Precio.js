const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class PrecioModel {
  static async findAll() {
    return prisma.precio.findMany({
      include: {
        detalle: true,
        descuento: true
      }
    });
  }

  static async findById(id) {
    return prisma.precio.findUnique({
      where: { id },
      include: {
        detalle: true,
        descuento: true
      }
    });
  }

  static async create(data) {
    return prisma.precio.create({
      data
    });
  }

  static async update(id, data) {
    return prisma.precio.update({
      where: { id },
      data
    });
  }

  static async delete(id) {
    return prisma.precio.delete({
      where: { id }
    });
  }
}

module.exports = PrecioModel;