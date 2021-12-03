import { Request, Response } from 'express';
import StatusCode from '../utils/StatusCode';
import User, { IUser } from '../models/user.model';

export const getAll = async (_req: Request, res: Response): Promise<any> => {
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
  return res.json(users);
};

export const getOne = async (req: Request, res: Response): Promise<any> => {
  const userId = req.params.id;
  const user = await User.findById(userId).populate({
    path: 'socials',
    populate: {
      path: 'social',
      model: 'Social',
    },
  });
  if (!user) {
    return res.status(StatusCode.NOT_FOUND).json({ message: 'User not found' });
  }
  return res.json(user);
};

export const create = async (req: Request, res: Response): Promise<any> => {
  const body = req.body as IUser;
  if (body.email) {
    const users = await User.findOne({ email: body.email }).countDocuments();
    if (users) {
      return res
        .status(StatusCode.BAD_REQUEST)
        .json({ message: 'This email already exists', value: body.email, field: 'email' });
    }
  }
  const result = await User.create(body);
  return res.status(StatusCode.CREATED).json(result);
};

export const update = async (req: Request, res: Response): Promise<any> => {
  const userId = req.params.id;
  if (req.body.boss === userId) {
    return res.status(StatusCode.BAD_REQUEST).json({
      ok: false,
      message: 'It is not possible set boss to be the same as user',
      field: 'boss',
    });
  }
  const body = req.body as Partial<IUser>;
  if (body.email) {
    const userDocuments = await User.find({
      _id: { $ne: userId },
      email: body.email,
    }).countDocuments();
    if (userDocuments) {
      return res
        .status(StatusCode.BAD_REQUEST)
        .json({ message: 'This email already exists', value: body.email, field: 'email' });
    }
  }
  const user = await User.findByIdAndUpdate(userId, body);
  if (!user) {
    return res.status(StatusCode.NOT_FOUND).json({ ok: false, message: 'User not found' });
  }
  return res.json({ ok: true, message: 'User updated successfully' });
};

export const deactivate = async (req: Request, res: Response): Promise<any> => {
  const userId = req.params.id;
  const update = { active: false, openToWork: false };
  const user = await User.findByIdAndUpdate(userId, update);
  if (!user) {
    return res.status(StatusCode.NOT_FOUND).json({ ok: false, message: 'User not found' });
  }
  return res.json({ ok: true, message: 'User deactivated successfully' });
};

export const deleteOne = async (req: Request, res: Response): Promise<any> => {
  const userId = req.params.id;

  const user = await User.findById(userId);
  if (!user) {
    return res.status(StatusCode.NOT_FOUND).json({ message: 'User not found' });
  }

  const userBoss = user.boss;
  // in the future should be discussing what should be instead null
  if (!userBoss) {
    return res.status(StatusCode.FORBIDDEN).json({ message: 'You cannot delete this user.' });
  }

  await User.updateMany({ boss: userId }, { boss: userBoss });

  await User.findByIdAndRemove(userId);

  return res.json({
    ok: true,
    message: 'User deleted successfully',
  });
};
