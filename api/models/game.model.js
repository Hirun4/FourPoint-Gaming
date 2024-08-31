import mongoose from 'mongoose';

const gameSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  title: String,
  genre: String,
  popularity: Number,
  releaseDate: Date,
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
  officialSite: String
});

export default mongoose.model('Game', gameSchema);
