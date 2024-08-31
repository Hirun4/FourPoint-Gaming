import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
import User from '../models/user.model.js';

export const test = (req, res) => {
  res.json({ message: 'API is working!' });
};

export const updateUser = async (req, res, next) => {
  if (req.user.id !== req.params.userId) {
    return next(errorHandler(403, 'You are not allowed to update this user'));
  }
  if (req.body.password) {
    if (req.body.password.length < 6) {
      return next(errorHandler(400, 'Password must be at least 6 characters'));
    }
    req.body.password = bcryptjs.hashSync(req.body.password, 10);
  }
  if (req.body.username) {
    if (req.body.username.length < 7 || req.body.username.length > 20) {
      return next(
        errorHandler(400, 'Username must be between 7 and 20 characters')
      );
    }
    if (req.body.username.includes(' ')) {
      return next(errorHandler(400, 'Username cannot contain spaces'));
    }
    if (req.body.username !== req.body.username.toLowerCase()) {
      return next(errorHandler(400, 'Username must be lowercase'));
    }
    if (!req.body.username.match(/^[a-zA-Z0-9]+$/)) {
      return next(
        errorHandler(400, 'Username can only contain letters and numbers')
      );
    }
  }
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.userId,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          profilePicture: req.body.profilePicture,
          password: req.body.password,
        },
      },
      { new: true }
    );
    const { password, ...rest } = updatedUser._doc;
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  if (!req.user.isAdmin && req.user.id !== req.params.userId) {
    return next(errorHandler(403, 'You are not allowed to delete this user'));
  }
  try {
    await User.findByIdAndDelete(req.params.userId);
    res.status(200).json('User has been deleted');
  } catch (error) {
    next(error);
  }
};

export const signout = (req, res, next) => {
  try {
    res
      .clearCookie('access_token')
      .status(200)
      .json('User has been signed out');
  } catch (error) {
    next(error);
  }
};

export const getUsers = async (req, res, next) => {
  if (!req.user.isAdmin) {
    return next(errorHandler(403, 'You are not allowed to see all users'));
  }
  try {
    const startIndex = parseInt(req.query.startIndex) || 0;
    const limit = parseInt(req.query.limit) || 9;
    const sortDirection = req.query.sort === 'asc' ? 1 : -1;

    const users = await User.find()
      .sort({ createdAt: sortDirection })
      .skip(startIndex)
      .limit(limit);

    const usersWithoutPassword = users.map((user) => {
      const { password, ...rest } = user._doc;
      return rest;
    });

    const totalUsers = await User.countDocuments();

    const now = new Date();

    const oneMonthAgo = new Date(
      now.getFullYear(),
      now.getMonth() - 1,
      now.getDate()
    );
    const lastMonthUsers = await User.countDocuments({
      createdAt: { $gte: oneMonthAgo },
    });

    res.status(200).json({
      users: usersWithoutPassword,
      totalUsers,
      lastMonthUsers,
    });
  } catch (error) {
    next(error);
  }
};

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      return next(errorHandler(404, 'User not found'));
    }
    const { password, ...rest } = user._doc;
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};


// Function to handle liking a game
export const likeGame = async (req, res, next) => {
  try {
    const { userId, gameId } = req.params;
    const user = await User.findById(userId);

    if (!user) {
      console.log("User not found");
      return next(errorHandler(404, 'User not found'));
    }

    // Check if the game is already liked
    if (user.likedGames.includes(gameId)) {
      console.log("Game already liked");
      return res.status(400).json({ message: 'Game already liked!' });
    }

    // Remove the game from dislikedGames if it exists there
    if (user.dislikedGames.includes(gameId)) {
      user.dislikedGames.pull(gameId);
    }

    // Add the game to the likedGames array
    user.likedGames.push(gameId);
    await user.save();

    console.log("Game liked successfully!");
    res.status(200).json({ message: 'Game liked successfully!', likedGames: user.likedGames });
  } catch (error) {
    console.log("Error in liking game:", error);
    next(error);
  }
};

// Function to handle disliking a game
export const dislikeGame = async (req, res, next) => {
  try {
    const { userId, gameId } = req.params;
    const user = await User.findById(userId);

    if (!user) {
      console.log("User not found");
      return next(errorHandler(404, 'User not found'));
    }

    // Check if the game is already disliked
    if (user.dislikedGames.includes(gameId)) {
      console.log("Game already disliked");
      return res.status(400).json({ message: 'Game already disliked!' });
    }

    // Remove the game from likedGames if it exists there
    if (user.likedGames.includes(gameId)) {
      user.likedGames.pull(gameId);
    }

    // Add the game to the dislikedGames array
    user.dislikedGames.push(gameId);
    await user.save();

    console.log("Game disliked successfully!");
    res.status(200).json({ message: 'Game disliked successfully!', dislikedGames: user.dislikedGames });
  } catch (error) {
    console.log("Error in disliking game:", error);
    next(error);
  }
};