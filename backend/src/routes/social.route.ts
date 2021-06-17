import express from 'express';
import * as socialController from '../controllers/social.controller';
import { validateBody, validateParameter } from '../validators';
import schema from '../validators/social.validator';

const router = express.Router();

router
  .get('/', socialController.getAll)
  .get('/active/', socialController.getAllActive)
  .post('/', validateBody(schema.post), socialController.create)
  .get('/:id', validateParameter(schema.id), socialController.getOne)
  .put('/:id', validateParameter(schema.id), validateBody(schema.put), socialController.update)
  .put('/deactivate/:id', validateParameter(schema.id), socialController.deactivate);

export default router;
