const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class UsuarioDireccionModel {
  static async findAll() {
    return prisma.usuarioDireccion.findMany({
      include: {
        usuario: true,
        direccion: true,
        ordenesEnvio: true
      }
    });
  }

  static async findById(id) {
    return prisma.usuarioDireccion.findUnique({
      where: { id },
      include: {
        usuario: true,
        direccion: true,
        ordenesEnvio: true
      }
    });
  }

  static async create(data) {
    return prisma.usuarioDireccion.create({
      data
    });
  }

  static async update(id, data) {
    return prisma.usuarioDireccion.update({
      where: { id },
      data
    });
  }

  static async delete(id) {
    return prisma.usuarioDireccion.delete({
      where: { id }
    });
  }
}

module.exports = UsuarioDireccionModel;