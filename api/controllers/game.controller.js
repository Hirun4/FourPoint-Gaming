import Game from '../models/game.model.js'; // Import your Game model

export const likeGame = async (req, res) => {
  const { gameId } = req.params;

  try {
    const game = await Game.findById(gameId);
    if (!game) {
      return res.status(404).json({ message: 'Game not found' });
    }
    game.likes += 1;
    await game.save();
    res.json({ message: 'Vote updated', game });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const dislikeGame = async (req, res) => {
  const { gameId } = req.params;

  try {
    const game = await Game.findById(gameId);
    if (!game) {
      return res.status(404).json({ message: 'Game not found' });
    }
    game.dislikes += 1;
    await game.save();
    res.json({ message: 'Vote updated', game });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
