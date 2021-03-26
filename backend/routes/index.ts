import express from 'express';
import userRoutes from './user.route';
import socialRoutes from './social.route';

const router = express.Router();

router.use('/users', userRoutes);
router.use('/socials', socialRoutes);

export default router;
