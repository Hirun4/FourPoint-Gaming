import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import {
  createGame,
  getGames,
  updateGame,
  deleteGame,
  voteGame,
} from '../controllers/game.controller.js';

const router = express.Router();

// Create a game (Admin only)
router.post('/', verifyToken, createGame);

// Get all games (Public)
router.get('/', getGames);

// Update a game (Admin only)
router.put('/:id', verifyToken, updateGame);

// Delete a game (Admin only)
router.delete('/:id', verifyToken, deleteGame);

// Vote on a game (Public)
router.put('/vote/:id', verifyToken, voteGame);

export default router;
