import mongoose from "mongoose";

const gameSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    genre: { type: String, required: true },
    popularity: { type: Number, default: 0 },
    releaseDate: { type: Date },
    image: { type: String },
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 },
    userId: { type: String, required: true },
    // Add votes array to track user votes
    votes: {
      type: [
        {
          userId: { type: String, required: true }, // ID of the user who voted
          type: { type: String, enum: ['like', 'dislike'], required: true }, // Type of vote
        },
      ],
      default: [], // Ensure it's initialized as an empty array
    },
  },
  { timestamps: true }
);

const Game = mongoose.model("Game", gameSchema);
export default Game;
