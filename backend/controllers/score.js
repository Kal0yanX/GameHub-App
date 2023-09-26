import asyncHandler from 'express-async-handler';
import Score from '../models/Score.js';
import User from '../models/User.js';

// description: Create a new score
// route: POST /api/scores
// @access: Private
const createScore = asyncHandler(async (req, res) => {
  const { scores, game } = req.body;
  const username = req.user.name; 

  const user = await User.findOne({ name: username });

  if (!user) {
    res.status(400);
    throw new Error('User not found');
  }

  const newScore = new Score({
    user: user._id,
    scores,
    game,
  });

  const savedScore = await newScore.save();

  res.status(201).json(savedScore);
});

// description: Get all scores
// route: GET /api/scores
// @access: Public
const getAllScores = asyncHandler(async (req, res) => {
    console.log('user id is ' + req.params.userId)
  const scores = await Score.find({User: req.params.userId });
  console.log(scores)

  res.status(200).json(scores);
});

export { createScore, getAllScores };
