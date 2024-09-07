import express from 'express';
import { likeGame, dislikeGame, removeLike, removeDislike } from  '../controllers/game.controller.js';
const router = express.Router();

// Like a game
router.post('/:id/like', likeGame);

// Remove a like
router.delete('/:id/like', removeLike);

// Dislike a game
router.post('/:id/dislike', dislikeGame);

// Remove a dislike
router.delete('/:id/dislike', removeDislike);

export default router; 
