import librosRoutes from './routes/librosRoutes.js';
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import path from 'path';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { fileURLToPath } from 'url';
dotenv.config();
const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const secretKey = 'miclavesecreta';

// Middlewares
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/libros', librosRoutes);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// let usuarios = [];

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('conexion con moongo exitosa'))
  .catch((err) => console.log('error en la conexion', err));

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
