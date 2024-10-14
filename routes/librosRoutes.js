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
router.get('/filter', protect, getFilteredBooks);
router.get('/:id', protect, getBookById);
router.post('/', protect, createLibros);
router.delete('/:id', protect, deleteBook);
router.put('/:id', protect, updateBookById);
router.get('/title/:title', protect, getBookByTitle);

export default router;
