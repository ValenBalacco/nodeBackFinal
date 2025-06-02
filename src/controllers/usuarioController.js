const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const UsuarioService = require('../services/usuarioService');
const { v4: uuidv4 } = require('uuid');
const JWT_SECRET = process.env.JWT_SECRET || 'Valen123';

const usuarioController = {
  async getAll(req, res) {
    try {
      const usuarios = await UsuarioService.getAll();
      res.json(usuarios);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getById(req, res) {
    try {
      const usuario = await UsuarioService.getById(req.params.id);
      if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' });
      res.json(usuario);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async create(req, res) {
    try {
      const nuevoUsuario = await UsuarioService.create(req.body);
      res.status(201).json(nuevoUsuario);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async update(req, res) {
    try {
      const usuarioActualizado = await UsuarioService.update(req.params.id, req.body);
      res.json(usuarioActualizado);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async remove(req, res) {
    try {
      await UsuarioService.remove(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async login(req, res) {
    const { email, contraseña } = req.body;
    const usuario = await UsuarioService.findByEmail(email);
    if (!usuario) return res.status(401).json({ error: 'Credenciales inválidas' });

    const valid = await bcrypt.compare(contraseña, usuario.contraseña);
    if (!valid) return res.status(401).json({ error: 'Credenciales inválidas' });

    const token = jwt.sign(
      { id: usuario.id, rol: usuario.rol },
      JWT_SECRET,
      { expiresIn: '1d' }
    );
    res.json({ token });
  },

  async register(req, res) {
    try {
      const { nombre, email, contraseña, dni } = req.body;
      const existente = await UsuarioService.findByEmail(email);
      if (existente) return res.status(400).json({ error: 'El email ya está registrado' });

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
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
};

module.exports = usuarioController;