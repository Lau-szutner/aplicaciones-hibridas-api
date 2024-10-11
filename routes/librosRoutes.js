import express from 'express';
import { getLibros, createLibros } from '../controllers/librosController';

const router = express.Router();

router.get('/', getLibros);
router.post('/', createLibros);

export default router;
