import mongoose from 'mongoose'; 

  const gameSchema = new mongoose.Schema({
  title: String,
  genre: String,
  popularity: Number,
  releaseDate: String,
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
  officialSite: String
});

const Game = mongoose.model('Game', gameSchema);
export default Game;