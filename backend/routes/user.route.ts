import express from 'express';
import * as userController from '../controllers/user.controller';


const router = express.Router();

router
  .get('/', userController.getAll)
  .post('/', userController.createUser)
  .get('/:id', userController.getOne)
  .put('/:id', userController.updateUser);


export default router;
