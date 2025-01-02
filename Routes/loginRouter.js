import express from 'express';
import { login, register } from '../controllers/loginController.js';

const router = express.Router();

// Login route
router.post('/login', login);

// Register route (optional, for testing purposes)
router.post('/register', register);

export default router;
