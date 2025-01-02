import express from 'express';
import { addSection } from '../controllers/sectionController.js';

const router = express.Router();

// Admin-only route to add a new section
router.post('/add', addSection);

export default router;
