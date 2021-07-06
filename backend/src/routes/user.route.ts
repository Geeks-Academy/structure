import express from 'express';
import ash from 'express-async-handler';
import * as userController from '../controllers/user.controller';
import * as cloudinaryController from '../controllers/cloudinary.controller';
import { validateBody, validateParameter } from '../validators';
import schema from '../validators/user.validator';

const router = express.Router();

router
  .get('/', ash(userController.getAll))
  .post('/uploadImage', ash(cloudinaryController.upload))
  .post('/', validateBody(schema.post), ash(userController.create))
  .get('/:id', validateParameter(schema.id), ash(userController.getOne))
  .put('/:id', validateBody(schema.put), validateParameter(schema.id), ash(userController.update))
  .put('/deactivate/:id', validateParameter(schema.id), ash(userController.deactivate))
  .delete('/:id', validateParameter(schema.id), ash(userController.deleteOne));

export default router;
