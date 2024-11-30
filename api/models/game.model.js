import mongoose from "mongoose";

const gameSchema = new mongoose.Schema({
  title: { type: String, required: true,unique: true },
  genre: { type: String, required: true },
  popularity: { type: Number, default: 0 },
  releaseDate: { type: Date },
  image: { type: String, default: null },
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
  votes: [
    {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
      type: { type: String, enum: ['like', 'dislike'], required: true }
    }
  ],
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true });


const Game = mongoose.model("Game", gameSchema);
export default Game;
