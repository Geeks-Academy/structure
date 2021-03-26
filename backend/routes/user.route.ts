import express from 'express';
import * as userController from '../controllers/user.controller';


const router = express.Router();

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getOne);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);


export default router;
