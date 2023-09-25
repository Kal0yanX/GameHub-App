import mongoose from 'mongoose';

const scoreSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    game: {
      type: String,
      required: true,
    },
    score: {
      type: Number,
      required: true,
    },
  },
);

const Score = mongoose.model('Score', scoreSchema);

export default Score;
