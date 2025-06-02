const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class CategoriaModel {
  static async findAll() {
    return prisma.categoria.findMany({
      include: { productos: true }
    });
  }

  static async findById(id) {
    return prisma.categoria.findUnique({
      where: { id },
      include: { productos: true }
    });
  }

  static async create(data) {
    return prisma.categoria.create({ data });
  }

  static async update(id, data) {
    return prisma.categoria.update({
      where: { id },
      data
    });
  }

  static async delete(id) {
    return prisma.categoria.delete({
      where: { id }
    });
  }
}

module.exports = CategoriaModel;