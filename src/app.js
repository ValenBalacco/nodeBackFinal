const express = require('express');
const app = express();


const categoriaRoutes = require('./routes/categoriaRoutes');
const descuentoRoutes = require('./routes/descuentoRoutes');
const detalleRoutes = require('./routes/detalleRoutes');
const direccionRoutes = require('./routes/direccionRoutes');
const imgRoutes = require('./routes/imgRoutes');
const itemOrdenRoutes = require('./routes/itemOrdenRoutes');
const ordenCompraRoutes = require('./routes/ordenCompraRoutes');
const precioRoutes = require('./routes/precioRoutes');
const productoRoutes = require('./routes/productoRoutes');
const talleRoutes = require('./routes/talleRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');
const usuarioDireccionRoutes = require('./routes/usuarioDireccionRoutes');

app.use(express.json());

app.use('/categorias', categoriaRoutes);
app.use('/descuentos', descuentoRoutes);
app.use('/detalles', detalleRoutes);
app.use('/direcciones', direccionRoutes);
app.use('/imgs', imgRoutes);
app.use('/items-orden', itemOrdenRoutes);
app.use('/ordenes-compra', ordenCompraRoutes);
app.use('/precios', precioRoutes);
app.use('/productos', productoRoutes);
app.use('/talles', talleRoutes);
app.use('/usuarios', usuarioRoutes);
app.use('/usuarios-direccion', usuarioDireccionRoutes);

module.exports = app;