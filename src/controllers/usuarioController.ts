import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import UsuarioService from '../services/usuarioService';
import { v4 as uuidv4 } from 'uuid';

const JWT_SECRET = process.env.JWT_SECRET || 'Valen123';

const usuarioController = {
  async getAll(req: Request, res: Response): Promise<void> {
    try {
      const usuarios = await UsuarioService.getAll();
      res.json(usuarios);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  async getById(req: Request, res: Response): Promise<void> {
    try {
      const usuario = await UsuarioService.getById(req.params.id);
      if (!usuario) {
        res.status(404).json({ error: 'Usuario no encontrado' });
        return;
      }
      res.json(usuario);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  async create(req: Request, res: Response): Promise<void> {
    try {
      const { nombre, email, contraseña, dni, rol } = req.body;

    
      if (!nombre || !email || !contraseña || !dni) {
        res.status(400).json({ error: 'Faltan campos obligatorios' });
        return;
      }

      const existente = await UsuarioService.findByEmail(email);
      if (existente) {
        res.status(400).json({ error: 'El email ya está registrado' });
        return;
      }

      const hashedPassword = await bcrypt.hash(contraseña, 10);

    
      const nuevoUsuario = await UsuarioService.create({
        id: uuidv4(),
        nombre,
        email,
        contraseña: hashedPassword,
        dni,
        rol: rol || 'CLIENTE'
      });

      res.status(201).json(nuevoUsuario);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  },

  async update(req: Request, res: Response): Promise<void> {
    try {
      const usuarioActualizado = await UsuarioService.update(req.params.id, req.body);
      res.json(usuarioActualizado);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  },

  async remove(req: Request, res: Response): Promise<void> {
    try {
      await UsuarioService.remove(req.params.id);
      res.status(204).send();
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  },
  async login(req: Request, res: Response): Promise<void> {
    try {
      const { email, contraseña } = req.body;
      const usuario = await UsuarioService.findByEmail(email);
      if (!usuario) {
        res.status(401).json({ error: 'Credenciales inválidas' });
        return;
      }

      const valid = await bcrypt.compare(contraseña, usuario.contraseña);
      if (!valid) {
        res.status(401).json({ error: 'Credenciales inválidas' });
        return;
      }

      const token = jwt.sign(
        { id: usuario.id, rol: usuario.rol },
        JWT_SECRET,
        { expiresIn: '1d' }
      );
      res.json({ usuario, token }); // <--- ¡Respuesta correcta!
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },


  async register(req: Request, res: Response): Promise<void> {
    try {
      const { nombre, email, contraseña, dni } = req.body;
      const existente = await UsuarioService.findByEmail(email);
      if (existente) {
        res.status(400).json({ error: 'El email ya está registrado' });
        return;
      }

      const hashedPassword = await bcrypt.hash(contraseña, 10);

      const nuevoUsuario = await UsuarioService.create({
        id: uuidv4(), 
        nombre,
        email,
        contraseña: hashedPassword,
        dni,
        rol: 'CLIENTE'
      });

      const token = jwt.sign(
        { id: nuevoUsuario.id, rol: nuevoUsuario.rol },
        JWT_SECRET,
        { expiresIn: '1d' }
      );

      res.status(201).json({ usuario: nuevoUsuario, token });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
};

export default usuarioController;