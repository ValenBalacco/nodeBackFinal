const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || 'Valen123';

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Token requerido' });

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: 'Token inválido' });
    req.user = user;
    next();
  });
}

function authorizeAdmin(req, res, next) {
  if (req.user && req.user.rol === 'ADMIN') {
    next();
  } else {
    res.status(403).json({ error: 'Acceso solo para administradores' });
  }
}

module.exports = { authenticateToken, authorizeAdmin };