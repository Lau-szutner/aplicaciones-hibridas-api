import express from 'express';
import {
  getLibros,
  createLibros,
  getBookById,
  //   getBookByAuthor,
  deleteBook,
} from '../controllers/librosController.js';

const router = express.Router();

router.get('/', getLibros);
router.get('/:id', getBookById);
router.post('/', createLibros);
router.delete('/:id', deleteBook);

export default router;
