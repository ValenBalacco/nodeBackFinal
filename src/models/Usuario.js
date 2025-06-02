const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class UsuarioModel {
  static async findAll() {
    return prisma.usuario.findMany({
      include: {
        direcciones: true,
        ordenes: true
      }
    });
  }

  static async findById(id) {
    return prisma.usuario.findUnique({
      where: { id },
      include: {
        direcciones: true,
        ordenes: true
      }
    });
  }

  static async findByEmail(email) {
    return prisma.usuario.findUnique({
      where: { email }
    });
  }

  static async create(data) {
    return prisma.usuario.create({
      data
    });
  }

  static async update(id, data) {
    return prisma.usuario.update({
      where: { id },
      data
    });
  }

  static async delete(id) {
    return prisma.usuario.delete({
      where: { id }
    });
  }
}

module.exports = UsuarioModel;