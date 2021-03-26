import express from 'express';
import * as socialController from '../controllers/social.controller';

const router = express.Router();

router.get('/', socialController.getAllSocials);
router.get('/:id', socialController.getOne);
router.post('/', socialController.createSocial);
router.put('/:id', socialController.updateSocial);


export default router;
