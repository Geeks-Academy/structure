import { Request, Response } from 'express';
import StatusCode from '../utils/StatusCode';
import User, { IUser } from '../models/user.model';

export const getAll = async (_req: Request, res: Response): Promise<Response> => {
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
    return res.json(users);
  } catch (error) {
    return res.status(StatusCode.INTERNAL_SERVER_ERROR).json({ message: error.message });
  }
};

export const getOne = async (req: Request, res: Response): Promise<Response> => {
  const userId = req.params.id;
  try {
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
  } catch (error) {
    console.log(error);
    return res.status(StatusCode.INTERNAL_SERVER_ERROR).json({ message: error.message });
  }
};

export const create = async (req: Request, res: Response): Promise<Response> => {
  const body = req.body as IUser;
  try {
    if (body.email) {
      const users = await User.findOne({ email: body.email }).countDocuments();
      if (users) {
        return res
          .status(StatusCode.BAD_REQUEST)
          .json({ message: 'This email already exists', value: body.email });
      }
    }
    const result = await User.create(body);
    return res.status(StatusCode.CREATED).json(result);
  } catch (error) {
    console.log(error);
    return res.status(StatusCode.INTERNAL_SERVER_ERROR).json({ message: error.message });
  }
};

export const update = async (req: Request, res: Response): Promise<Response> => {
  const userId = req.params.id;
  if (req.body.boss === userId) {
    return res
      .status(StatusCode.BAD_REQUEST)
      .json({ ok: false, message: 'It is not possible set boss to be the same as user' });
  }
  const body = req.body as Partial<IUser>;
  try {
    if (body.email) {
      const userDocuments = await User.find({
        _id: { $ne: userId },
        email: body.email,
      }).countDocuments();
      if (userDocuments) {
        return res
          .status(StatusCode.BAD_REQUEST)
          .json({ message: 'This email already exists', value: body.email });
      }
    }
    const user = await User.findByIdAndUpdate(userId, body);
    if (!user) {
      return res.status(StatusCode.NOT_FOUND).json({ ok: false, message: 'User not found' });
    }
    return res.json({ ok: true, message: 'User updated successfully' });
  } catch (error) {
    console.log(error);
    return res.status(StatusCode.INTERNAL_SERVER_ERROR).json({ message: error.message });
  }
};

export const deactivate = async (req: Request, res: Response): Promise<Response> => {
  const userId = req.params.id;
  const update = { active: false, openToWork: false };
  try {
    const user = await User.findByIdAndUpdate(userId, update);
    if (!user) {
      return res.status(StatusCode.NOT_FOUND).json({ ok: false, message: 'User not found' });
    }
    return res.json({ ok: true, message: 'User deactivated successfully' });
  } catch (error) {
    return res.status(StatusCode.INTERNAL_SERVER_ERROR).json({ message: error.message });
  }
};

export const deleteOne = async (req: Request, res: Response): Promise<Response> => {
  const userId = req.params.id;

  try {
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
      message: 'Boss delete successfully. Children now have the new Boss from their Boss.',
    });
  } catch (error) {
    return res.status(StatusCode.INTERNAL_SERVER_ERROR).json({ message: error.message });
  }
};
