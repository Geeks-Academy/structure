import express from 'express';
import * as userController from '../controllers/user.controller';
import { schema, validateBody, validateParameter } from '../validators/user.validator';

const router = express.Router();

router
  .get('/', userController.getAll)
  .post('/', validateBody(schema.post), userController.create)
  .get('/:id', validateParameter(schema.id), userController.getOne)
  .put('/:id',
    validateBody(schema.put),
    validateParameter(schema.id),
    userController.update
  );


export default router;
