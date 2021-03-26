import { Request, Response } from 'express';
import User, { IUser } from '../models/user.model';

export const getAll = async (_req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
}

export const getOne = async (req: Request, res: Response) => {
  const userId = req.params.id;
  try {
    const user = await User.findOne({ _id: userId });
    res.json(user);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
}

export const createUser = async (req: Request, res: Response) => {
  const user = req.body;
  try {
    const result = await User.create(user);
    res.status(201).json(result);
  } catch (error) {
    console.log(error)
    res.send(error);
  }
}

export const updateUser = async (req: Request, res: Response) => {
  const userId = req.params.id
  const user = req.body as Partial<IUser>
  try {
    await User.updateOne({ _id: userId }, user);
    res.json({ ok: true, message: 'User updated successfully' });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
}
