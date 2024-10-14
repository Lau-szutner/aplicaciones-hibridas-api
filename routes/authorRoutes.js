import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import { getAuthor, createAuthor } from '../controllers/authorController.js';

const router = express.Router();

router.get('/',  protect, getAuthor);
router.post('/',  protect, createAuthor);

export default router;
