import express from 'express';
import ash from 'express-async-handler';
import * as socialController from '../controllers/social.controller';
import { validateBody, validateParameter } from '../validators';
import schema from '../validators/social.validator';

const router = express.Router();

router
  .get('/', ash(socialController.getAll))
  .get('/active/', ash(socialController.getAllActive))
  .post('/', validateBody(schema.post), ash(socialController.create))
  .get('/:id', validateParameter(schema.id), ash(socialController.getOne))
  .put('/:id', validateParameter(schema.id), validateBody(schema.put), ash(socialController.update))
  .put('/deactivate/:id', validateParameter(schema.id), ash(socialController.deactivate));

export default router;
