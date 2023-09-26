import express from 'express';
const router = express.Router();
import { authUser, registerUser, logoutUser, getUserProfile, updateUserProfile } from '../controllers/user.js';
import { protect } from '../middleware/authMiddleware.js';
import { createScore, getAllScores } from '../controllers/score.js'; // Import the new score controllers

router.post('/', registerUser);
router.post('/auth', authUser);
router.post('/logout', logoutUser);
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);

// Routes for scores
router.post('/scores', protect, createScore); // Create a new score
router.get('/scores', getAllScores); // Get all scores

export default router;
