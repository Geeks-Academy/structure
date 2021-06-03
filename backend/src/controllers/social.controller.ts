import { Request, Response, NextFunction } from 'express';
import Social, { ISocial } from '../models/social.model';
import User from '../models/user.model';
import StatusCode from '../utils/StatusCode';
import { NotFound, NoContent } from '../utils/Errors'

export const getAll = async (_req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const socials = await Social.find();
    if (socials.length === 0) {
      throw new NoContent()
    }
    res.json(socials);
  } catch (error) {
    console.log(error);
    next(error)
  }
};

export const getOne = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const socialId = req.params.id;

  try {
    const social = await Social.findById(socialId);
    if (!social) {
      throw new NotFound('Social not found');
    }
    res.json(social);
  } catch (error) {
    console.log(error);
    next(error)
  }
};

export const create = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const social = req.body;

  try {
    const result = await Social.create(social);
    res.status(StatusCode.CREATED).json(result);
  } catch (error) {
    console.log(error);
    next(error)
  }
};

export const update = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const socialId = req.params.id;
  const social = req.body as Partial<ISocial>;

  try {
    const result = await Social.findByIdAndUpdate(socialId, social);

    if (!result) {
      throw new NotFound('Social not found');
    }

    res.json({ ok: true, message: 'Social updated successfully' });
  } catch (error) {
    console.log(error);
    next(error)
  }
};

export const deactivate = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const socialId = req.params.id;
  const update = { active: false };

  try {
    const social = await Social.findByIdAndUpdate(socialId, update);

    if (!social) {
      throw new NotFound('Social not found');
    }

    await User.updateMany({}, { $pull: { socials: { social: socialId } } }, { multi: true });
    res.json({ ok: true, message: 'Social deactivated successfully' });
  } catch (error) {
    console.log(error);
    next(error)
  }
};
