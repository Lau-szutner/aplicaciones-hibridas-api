import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const secretKey = 'miclavesecreta';

const app = express();
const port = 3000;

// Middlewares
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

let usuarios = [];

// Middleware de autenticación
const auth = (req, res, next) => {
  const getToken = req.headers.authorization; // Asegúrate de que sea 'authorization'

  if (getToken) {
    const token = getToken.split(' ')[1];
    jwt.verify(token, secretKey, (err, payload) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = {
        id: payload.id,
        email: payload.email,
      };
      next();
    });
  } else {
    return res.sendStatus(401); // No hay token presente
  }
};

// Login
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const user = usuarios.find((u) => u.email === email);
  if (!user) {
    return res.status(404).json({ message: 'Usuario no encontrado' });
  }

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    return res.status(401).json({ message: 'Password incorrecto' });
  }

  const token = jwt.sign({ id: user.id, email: user.email }, secretKey, {
    expiresIn: '1h',
  });

  res.status(200).json({ token });
});

// Registrar un nuevo usuario
app.post('/usuarios', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send('Los campos son obligatorios!');
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const nuevoUsuario = {
    id: usuarios.length + 1,
    email,
    password: hashedPassword,
  };

  usuarios.push(nuevoUsuario);
  res.status(201).json(nuevoUsuario);
});

// Obtener usuarios (con autenticación)
app.get('/usuarios', auth, (req, res) => {
  res.json(usuarios); // Removido el next()
});

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
