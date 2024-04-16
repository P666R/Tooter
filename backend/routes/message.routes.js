import express from 'express';
import {
  getMessages,
  sendMessage,
  likeMessage,
  unlikeMessage,
} from '../controllers/message.controller.js';
import protectRoute from '../middleware/protectRoute.js';

const router = express.Router();

router.get('/:id', protectRoute, getMessages);
router.post('/send/:id', protectRoute, sendMessage);
router.post('/like/:id', protectRoute, likeMessage);
router.post('/unlike/:id', protectRoute, unlikeMessage);

export default router;
