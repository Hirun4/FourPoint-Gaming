import Game from '../models/game.model.js';
import { errorHandler } from '../utils/error.js';


export const createGame = async (req, res, next) => {
  if (!req.user.isAdmin) {
    return next(errorHandler(403, 'Only admins can create a game'));
  }

  if (!req.body.title || !req.body.genre || !req.body.releaseDate || !req.body.officialSite) {
    return next(errorHandler(400, 'Please provide all required fields'));
  }

 
  let imagePath = null;
  if (req.file) {
    imagePath = `/uploads/${req.file.filename}`; 
  }
  console.log('Received Game Data:', req.body);
  console.log('Received File:', req.file);

  try {
    const newGame = new Game({
      ...req.body,
      image: imagePath, 
      userId: req.user.id, 
    });
    console.log("Authenticated user ID:", req.user.id);
    console.log('Game object before saving:', newGame);
    const savedGame = await newGame.save();
    // console.log('Game Created:', savedGame);
    res.status(201).json(savedGame);
  } catch (error) {
    next(error);
  }
};

// Get all games (accessible to everyone)
export const getGames = async (req, res, next) => {
  try {
    const games = await Game.find().sort({ createdAt: -1 });
    res.status(200).json(games);
  } catch (error) {
    next(error);
  }
};

// Update a game (Admin only)
export const updateGame = async (req, res, next) => {
  if (!req.user.isAdmin) {
    return next(errorHandler(403, 'Only admins can update a game'));
  }

  // If there's a new image file, update the image path
  let imagePath = req.body.image; // Keep the current image unless there's a new one
  if (req.file) {
    imagePath = `/uploads/${req.file.filename}`; // Update the image path with the new file
  }

  try {
    const updatedGame = await Game.findByIdAndUpdate(
      req.params.id,
      { ...req.body, image: imagePath }, // Update the image as well
      { new: true }
    );
    if (!updatedGame) {
      return next(errorHandler(404, 'Game not found'));
    }
    res.status(200).json(updatedGame);
  } catch (error) {
    next(error);
  }
};

// Delete a game (Admin only)
export const deleteGame = async (req, res, next) => {
  if (!req.user.isAdmin) {
    return next(errorHandler(403, 'Only admins can delete a game'));
  }

  try {
    const deletedGame = await Game.findByIdAndDelete(req.params.id);
    if (!deletedGame) {
      return next(errorHandler(404, 'Game not found'));
    }
    res.status(200).json({ message: 'Game deleted successfully' });
  } catch (error) {
    next(error);
  }
};

// Vote on a game (accessible to everyone)
export const vote = async (req, res, next) => {
  const { id } = req.params; // Game ID
  const { type } = req.body; // 'like' or 'dislike'
  const userId = req.user.id; // Get the user id from the logged-in user

  try {
    // Fetch the game by ID
    const game = await Game.findById(id);
    if (!game) {
      return res.status(404).json({ message: 'Game not found' });
    }

    // Check if the user has already voted
    const existingVote = game.votes.find((vote) => vote.userId.toString() === userId);

    if (existingVote) {
      if (existingVote.type === type) {
        // If user clicks the same button again, remove their vote
        game.votes = game.votes.filter((vote) => vote.userId.toString() !== userId);

        // Adjust like/dislike counts accordingly
        if (type === 'like') {
          game.likes -= 1;
        } else if (type === 'dislike') {
          game.dislikes -= 1;
        }
      } else {
        // If the user clicks the opposite button (like to dislike or vice versa), update their vote
        existingVote.type = type;

        // Adjust like/dislike counts accordingly
        if (type === 'like') {
          game.likes += 1;
          game.dislikes -= 1;
        } else if (type === 'dislike') {
          game.dislikes += 1;
          game.likes -= 1;
        }
      }
    } else {
      // If no vote exists, create a new vote
      game.votes.push({ userId, type });
      if (type === 'like') {
        game.likes += 1;
      } else if (type === 'dislike') {
        game.dislikes += 1;
      }
    }

    // Save the updated game
    const updatedGame = await game.save();
    res.status(200).json(updatedGame);
  } catch (error) {
    next(error);
  }
};