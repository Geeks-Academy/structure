import { Request, Response } from 'express';
import StatusCode from '../utils/StatusCode';
import User, { IUser } from '../models/user.model';

export const getAll = async (_req: Request, res: Response) => {
  try {
    const users = await User.find().populate({
      path: 'socials',
      populate: {
        path: 'social',
        model: 'Social',
      },
    });
    if (users.length === 0) {
      return res.status(StatusCode.NO_CONTENT).json({ message: 'Not found any users' });
    }
    res.json(users);
  } catch (error) {
    res.status(StatusCode.INTERNAL_SERVER_ERROR).json({ message: error.message });
  }
};

export const getOne = async (req: Request, res: Response) => {
  const userId = req.params.id;
  try {
    const user = await User.findOne({ _id: userId }).populate({
      path: 'socials',
      populate: {
        path: 'social',
        model: 'Social',
      },
    });
    if (!user) {
      return res.status(StatusCode.NOT_FOUND).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(StatusCode.INTERNAL_SERVER_ERROR).json({ message: error.message });
  }
};

export const create = async (req: Request, res: Response) => {
  const user = req.body;
  try {
    const result = await User.create(user);
    res.status(StatusCode.CREATED).json(result);
  } catch (error) {
    console.log(error);
    res.status(StatusCode.INTERNAL_SERVER_ERROR).json({ message: error.message });
  }
};

export const update = async (req: Request, res: Response) => {
  const userId = req.params.id;
  const user = req.body as Partial<IUser>;
  try {
    await User.updateOne({ _id: userId }, user);
    res.json({ ok: true, message: 'User updated successfully' });
  } catch (error) {
    console.log(error);
    res.status(StatusCode.INTERNAL_SERVER_ERROR).json({ message: error.message });
  }
};
