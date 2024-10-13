import express from 'express';
import { getAuthor, createAuthor } from '../controllers/authorController.js';

const router = express.Router();

router.get('/', getAuthor);
router.post('/', createAuthor);

export default router;
