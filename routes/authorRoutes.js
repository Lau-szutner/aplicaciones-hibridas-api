import express from 'express';
import {
  getAuthor,
  createAuthor,
  //   getBookById,
} from '../controllers/authorController.js';

const router = express.Router();

router.get('/', getAuthor);
router.post('/', createAuthor);
// router.get('/:id', getBookById);

export default router;
