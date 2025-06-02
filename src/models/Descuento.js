const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class DescuentoModel {
  static async findAll() {
    return prisma.descuento.findMany({
      include: { precios: true }
    });
  }

  static async findById(id) {
    return prisma.descuento.findUnique({
      where: { id },
      include: { precios: true }
    });
  }

  static async create(data) {
    return prisma.descuento.create({
      data
    });
  }

  static async update(id, data) {
    return prisma.descuento.update({
      where: { id },
      data
    });
  }

  static async delete(id) {
    return prisma.descuento.delete({
      where: { id }
    });
  }
}

module.exports = DescuentoModel;