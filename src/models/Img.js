const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class ImgModel {
  static async findAll() {
    return prisma.img.findMany({
      include: { detalle: true }
    });
  }

  static async findById(id) {
    return prisma.img.findUnique({
      where: { id },
      include: { detalle: true }
    });
  }

  static async create(data) {
    return prisma.img.create({
      data
    });
  }

  static async update(id, data) {
    return prisma.img.update({
      where: { id },
      data
    });
  }

  static async delete(id) {
    return prisma.img.delete({
      where: { id }
    });
  }
}

module.exports = ImgModel;