import  Game from '../models/game.model.js';
import User from '../models/user.model.js';

// Like a game
export const likeGame = async (req, res) => {
  try {
    const gameId = req.params.id;
    const userId = req.body.userId;

    // Find the game and update likes
    const game = await Game.findById(gameId);
    if (!game) return res.status(404).json({ message: 'Game not found' });

    game.likes += 1;
    await game.save();

    // Update user's vote
    const user = await User.findById(userId);
    user.votes.set(gameId, 'liked');
    await user.save();

    res.status(200).json(game);
  } catch (error) {
    res.status(500).json({ message: 'Error liking game', error });
  }
};

// Remove a like
export const removeLike = async (req, res) => {
  try {
    const gameId = req.params.id;
    const userId = req.body.userId;

    // Find the game and update likes
    const game = await Game.findById(gameId);
    if (!game) return res.status(404).json({ message: 'Game not found' });

    game.likes -= 1;
    await game.save();

    // Update user's vote
    const user = await User.findById(userId);
    user.votes.delete(gameId);
    await user.save();

    res.status(200).json(game);
  } catch (error) {
    res.status(500).json({ message: 'Error removing like', error });
  }
};

// Dislike a game
export const dislikeGame = async (req, res) => {
  try {
    const gameId = req.params.id;
    const userId = req.body.userId;

    // Find the game and update dislikes
    const game = await Game.findById(gameId);
    if (!game) return res.status(404).json({ message: 'Game not found' });

    game.dislikes += 1;
    await game.save();

    // Update user's vote
    const user = await User.findById(userId);
    user.votes.set(gameId, 'disliked');
    await user.save();

    res.status(200).json(game);
  } catch (error) {
    res.status(500).json({ message: 'Error disliking game', error });
  }
};

// Remove a dislike
export const removeDislike = async (req, res) => {
  try {
    const gameId = req.params.id;
    const userId = req.body.userId;

    // Find the game and update dislikes
    const game = await Game.findById(gameId);
    if (!game) return res.status(404).json({ message: 'Game not found' });

    game.dislikes -= 1;
    await game.save();

    // Update user's vote
    const user = await User.findById(userId);
    user.votes.delete(gameId);
    await user.save();

    res.status(200).json(game);
  } catch (error) {
    res.status(500).json({ message: 'Error removing dislike', error });
  }
};

// module.exports = { likeGame, removeLike, dislikeGame, removeDislike };
