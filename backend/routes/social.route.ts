import express from 'express';
import * as socialController from '../controllers/social.controller';

const router = express.Router();

router
  .get('/', socialController.getAll)
  .post('/', socialController.create)
  .get('/:id', socialController.getOne)
  .put('/:id', socialController.update);


export default router;
