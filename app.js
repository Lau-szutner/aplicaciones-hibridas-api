import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import bcrypt from 'bcrypt';
import mongoose from 'mongoose';

import { fileURLToPath } from 'url';

// import cors from 'cors';

//Ruta absoluta al archivo que estoy usando
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//
const app = express();
const port = 3000;

// Middlewares
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});

//JWT

let usuarios = [];
//new User
app.post('/usuarios', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send('Los campos son obligatorios!');
  }

  const newPassword = await bcrypt.hash(password, 10);

  const nuevoUsuario = {
    id: usuarios.length + 1,
    email,
    newPassword,
  };

  usuarios.push(nuevoUsuario);
  res.status(201).json(nuevoUsuario);
});

//Login
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const user = usuarios.find((u) => u.email === email);
  console.log(user);
  if (!user) {
    return res.status(404).json({ message: 'usuario no encontrado' });
  }

  const validPassword = await bcrypt.compare(password, user.password);
  console.log(validPassword);

  if (!validPassword) {
    return res.status(401).json({ message: 'password incorrect' });
  }

  res.status(200).json({ token });
});
