const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class ProductoModel {
  static async findAll() {
    return prisma.producto.findMany({
      include: {
        categoria: true,
        detalles: true,
        itemsOrden: true
      }
    });
  }

  static async findById(id) {
    return prisma.producto.findUnique({
      where: { id },
      include: {
        categoria: true,
        detalles: true,
        itemsOrden: true
      }
    });
  }

  static async create(data) {
    return prisma.producto.create({
      data
    });
  }

  static async update(id, data) {
    return prisma.producto.update({
      where: { id },
      data
    });
  }

  static async delete(id) {
    return prisma.producto.delete({
      where: { id }
    });
  }
}

module.exports = ProductoModel;