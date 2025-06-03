import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'Valen123';

interface UserPayload extends JwtPayload {
  id: number;
  rol: string;
}

interface AuthRequest extends Request {
  user?: UserPayload;
}

function authenticateToken(req: AuthRequest, res: Response, next: NextFunction): void {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) {
    res.status(401).json({ error: 'Token requerido' });
    return;
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: 'Token inválido' });
    req.user = user as UserPayload;
    next();
  });
}

function authorizeAdmin(req: AuthRequest, res: Response, next: NextFunction): void {
  if (req.user && req.user.rol === 'ADMIN') {
    next();
  } else {
    res.status(403).json({ error: 'Acceso solo para administradores' });
  }
}

export { authenticateToken, authorizeAdmin };