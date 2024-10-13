import express from 'express';
import {
  getLibros,
  createLibros,
  getBookById,
  deleteBook,
  //   getBookByAuthor,
  updateBookById,
  getBookByTitle,
} from '../controllers/librosController.js';

const router = express.Router();

router.get('/', getLibros);
router.get('/:id', getBookById);
router.post('/', createLibros);
router.delete('/:id', deleteBook);
router.put('/:id', updateBookById);
router.get('/title/:title', getBookByTitle);

export default router;
