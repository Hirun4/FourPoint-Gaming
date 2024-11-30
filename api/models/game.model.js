import mongoose from "mongoose";

const gameSchema = new mongoose.Schema({
  title: { type: String, required: true },
  genre: { type: String, required: true },
  popularity: { type: Number, default: 0 },
  releaseDate: { type: Date },
  image: { type: String },
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
  userId: { type: String, required: true },
},
{timestamps: true}

);

const Game = mongoose.model("Game", gameSchema);
export default Game;
