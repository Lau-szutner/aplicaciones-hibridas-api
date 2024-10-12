import express from 'express';
import {
  getLibros,
  createLibros,
  getBookById,
} from '../controllers/librosController.js';

const router = express.Router();

router.get('/', getLibros);
router.get('/:id', getBookById);
router.post('/', createLibros);

export default router;
