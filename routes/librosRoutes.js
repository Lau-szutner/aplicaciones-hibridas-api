import express from 'express';
import {
  getLibros,
  createLibros,
  getBookById,
  deleteBook,
  updateBookById,
  getBookByTitle,
  getFilteredBooks,
} from '../controllers/librosController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', protect, getLibros);
router.get('/filter', getFilteredBooks);
router.get('/:id', getBookById);
router.post('/', createLibros);
router.delete('/:id', deleteBook);
router.put('/:id', updateBookById);
router.get('/title/:title', getBookByTitle);

export default router;
