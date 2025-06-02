const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class DireccionModel {
  static async findAll() {
    return prisma.direccion.findMany({
      include: { usuarios: true }
    });
  }

  static async findById(id) {
    return prisma.direccion.findUnique({
      where: { id },
      include: { usuarios: true }
    });
  }

  static async create(data) {
    return prisma.direccion.create({
      data
    });
  }

  static async update(id, data) {
    return prisma.direccion.update({
      where: { id },
      data
    });
  }

  static async delete(id) {
    return prisma.direccion.delete({
      where: { id }
    });
  }
}

module.exports = DireccionModel;