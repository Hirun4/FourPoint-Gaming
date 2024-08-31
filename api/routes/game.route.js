import express from 'express';
import { likeGame, dislikeGame } from '../controllers/game.controller.js';

const router = express.Router();

router.post('/:id/like', likeGame);
router.post('/:id/dislike', dislikeGame);

export default router;
