import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';

import librosRoutes from './routes/librosRoutes.js';
import authorRoutes from './routes/authorRoutes.js';
import authRoutes from './routes/authRoutes.js'; // Importa las rutas de autenticación
import { protect } from './middleware/authMiddleware.js'; // Middleware de autenticación

dotenv.config();

const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middlewares
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public'))); // Archivos estáticos desde 'public'

// Rutas
app.use('/libros', protect, librosRoutes); // Rutas de libros
app.use('/author', protect, authorRoutes); // Rutas de autores
app.use('/auth', authRoutes); // Rutas de autenticación

// Página principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Rutas para las vistas
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'register.html'));
});

// Conectar con MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('Conexión con MongoDB exitosa'))
  .catch((err) => console.log('Error en la conexión', err));

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
