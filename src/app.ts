import express, { Application } from 'express';
const cors = require('cors');
import categoriaRoutes from './routes/categoriaRoutes';
import descuentoRoutes from './routes/descuentoRoutes';
import detalleRoutes from './routes/detalleRoutes';
import direccionRoutes from './routes/direccionRoutes';
import imgRoutes from './routes/imgRoutes';
import itemOrdenRoutes from './routes/itemOrdenRoutes';
import ordenCompraRoutes from './routes/ordenCompraRoutes';
import precioRoutes from './routes/precioRoutes';
import productoRoutes from './routes/productoRoutes';
import talleRoutes from './routes/talleRoutes';
import usuarioRoutes from './routes/usuarioRoutes';
import usuarioDireccionRoutes from './routes/usuarioDireccionRoutes';
import mercadoPagoRoutes from "./routes/mercadoPagoRoutes";
const app: Application = express();

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true // <- ¡Esto es CLAVE para que funcione con withCredentials en frontend!
}));

app.use("/mercadopago", mercadoPagoRoutes);
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

export default app;