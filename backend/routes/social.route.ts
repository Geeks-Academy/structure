import express from 'express';
import * as socialController from '../controllers/social.controller';
import { validateBody, validateParameter } from '../validators';
import schema from '../validators/social.validator';

const router = express.Router();

router
  .get('/', socialController.getAll)
  .post('/', validateBody(schema.post), socialController.create)
  .get('/:id', validateParameter(schema.id), socialController.getOne)
  .put('/:id',
    validateParameter(schema.id),
    validateBody(schema.put),
    socialController.update
  )
  .patch('/deactivation/:id', validateParameter(schema.id), socialController.setDeactivationOne)


export default router;
