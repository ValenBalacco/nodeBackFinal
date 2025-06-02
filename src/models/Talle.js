const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class TalleModel {
  static async findAll() {
    return prisma.talle.findMany({
      include: { detalles: true }
    });
  }

  static async findById(id) {
    return prisma.talle.findUnique({
      where: { id },
      include: { detalles: true }
    });
  }

  static async create(data) {
    return prisma.talle.create({
      data
    });
  }

  static async update(id, data) {
    return prisma.talle.update({
      where: { id },
      data
    });
  }

  static async delete(id) {
    return prisma.talle.delete({
      where: { id }
    });
  }
}

module.exports = TalleModel;