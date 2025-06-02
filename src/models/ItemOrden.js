const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class ItemOrdenModel {
  static async findAll() {
    return prisma.itemOrden.findMany({
      include: {
        ordenCompra: true,
        producto: true
      }
    });
  }

  static async findById(id) {
    return prisma.itemOrden.findUnique({
      where: { id },
      include: {
        ordenCompra: true,
        producto: true
      }
    });
  }

  static async create(data) {
    return prisma.itemOrden.create({
      data
    });
  }

  static async update(id, data) {
    return prisma.itemOrden.update({
      where: { id },
      data
    });
  }

  static async delete(id) {
    return prisma.itemOrden.delete({
      where: { id }
    });
  }
}

module.exports = ItemOrdenModel;