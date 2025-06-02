-- CreateEnum
CREATE TYPE "Rol" AS ENUM ('ADMIN', 'CLIENTE');

-- CreateEnum
CREATE TYPE "TipoProducto" AS ENUM ('REMERA', 'PANTALON', 'ZAPATILLA', 'OTRO');

-- CreateTable
CREATE TABLE "Categoria" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Categoria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Descuento" (
    "id" SERIAL NOT NULL,
    "porcentaje" DOUBLE PRECISION NOT NULL,
    "fechaInicio" TIMESTAMP(3) NOT NULL,
    "fechaFin" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Descuento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Detalle" (
    "id" SERIAL NOT NULL,
    "color" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "stock" INTEGER NOT NULL,
    "productoId" INTEGER NOT NULL,
    "talleId" INTEGER NOT NULL,

    CONSTRAINT "Detalle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Direccion" (
    "id" SERIAL NOT NULL,
    "localidad" TEXT NOT NULL,
    "pais" TEXT NOT NULL,
    "provincia" TEXT NOT NULL,
    "departamento" TEXT NOT NULL,
    "codigoPostal" TEXT NOT NULL,

    CONSTRAINT "Direccion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Img" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "detalleId" INTEGER NOT NULL,

    CONSTRAINT "Img_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ItemOrden" (
    "id" SERIAL NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "ordenCompraId" INTEGER NOT NULL,
    "productoId" INTEGER NOT NULL,

    CONSTRAINT "ItemOrden_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrdenCompra" (
    "id" SERIAL NOT NULL,
    "total" DOUBLE PRECISION NOT NULL,
    "descuento" DOUBLE PRECISION NOT NULL,
    "fechaCompra" TEXT NOT NULL,
    "usuarioId" TEXT NOT NULL,
    "direccionEnvioId" INTEGER NOT NULL,

    CONSTRAINT "OrdenCompra_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Precio" (
    "id" SERIAL NOT NULL,
    "precioCompra" DOUBLE PRECISION NOT NULL,
    "precioVenta" DOUBLE PRECISION NOT NULL,
    "detalleId" INTEGER NOT NULL,
    "descuentoId" INTEGER NOT NULL,

    CONSTRAINT "Precio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Producto" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "categoriaId" INTEGER NOT NULL,
    "tipoProducto" "TipoProducto" NOT NULL,
    "sexo" TEXT NOT NULL,

    CONSTRAINT "Producto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Talle" (
    "id" SERIAL NOT NULL,
    "talle" TEXT NOT NULL,

    CONSTRAINT "Talle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Usuario" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "contraseña" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "dni" TEXT NOT NULL,
    "rol" "Rol" NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UsuarioDireccion" (
    "id" SERIAL NOT NULL,
    "usuarioId" TEXT NOT NULL,
    "direccionId" INTEGER NOT NULL,

    CONSTRAINT "UsuarioDireccion_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_dni_key" ON "Usuario"("dni");

-- AddForeignKey
ALTER TABLE "Detalle" ADD CONSTRAINT "Detalle_productoId_fkey" FOREIGN KEY ("productoId") REFERENCES "Producto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Detalle" ADD CONSTRAINT "Detalle_talleId_fkey" FOREIGN KEY ("talleId") REFERENCES "Talle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Img" ADD CONSTRAINT "Img_detalleId_fkey" FOREIGN KEY ("detalleId") REFERENCES "Detalle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemOrden" ADD CONSTRAINT "ItemOrden_ordenCompraId_fkey" FOREIGN KEY ("ordenCompraId") REFERENCES "OrdenCompra"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemOrden" ADD CONSTRAINT "ItemOrden_productoId_fkey" FOREIGN KEY ("productoId") REFERENCES "Producto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrdenCompra" ADD CONSTRAINT "OrdenCompra_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrdenCompra" ADD CONSTRAINT "OrdenCompra_direccionEnvioId_fkey" FOREIGN KEY ("direccionEnvioId") REFERENCES "UsuarioDireccion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Precio" ADD CONSTRAINT "Precio_detalleId_fkey" FOREIGN KEY ("detalleId") REFERENCES "Detalle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Precio" ADD CONSTRAINT "Precio_descuentoId_fkey" FOREIGN KEY ("descuentoId") REFERENCES "Descuento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Producto" ADD CONSTRAINT "Producto_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "Categoria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsuarioDireccion" ADD CONSTRAINT "UsuarioDireccion_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsuarioDireccion" ADD CONSTRAINT "UsuarioDireccion_direccionId_fkey" FOREIGN KEY ("direccionId") REFERENCES "Direccion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
