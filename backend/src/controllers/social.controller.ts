import { Request, Response } from 'express';
import Social, { ISocial } from '../models/social.model';
import User from '../models/user.model';
import StatusCode from '../utils/StatusCode';

export const getAll = async (_req: Request, res: Response): Promise<any> => {
  const socials = await Social.find();
  if (socials.length === 0) {
    return res.status(StatusCode.NO_CONTENT).send();
  }
  return res.json(socials);
};

export const getAllActive = async (_req: Request, res: Response): Promise<any> => {
  const socials = await Social.find({ active: true });
  if (socials.length === 0) {
    return res.status(StatusCode.NO_CONTENT).send();
  }
  return res.json(socials);
};

export const getOne = async (req: Request, res: Response): Promise<any> => {
  const socialId = req.params.id;
  const social = await Social.findById(socialId);
  if (!social) {
    return res.status(StatusCode.NOT_FOUND).json({ message: 'Social not found' });
  }
  res.json(social);
};

export const create = async (req: Request, res: Response): Promise<any> => {
  const social = req.body;
  const result = await Social.create(social);
  res.status(StatusCode.CREATED).json(result);
};

export const update = async (req: Request, res: Response): Promise<any> => {
  const socialId = req.params.id;
  const social = req.body as Partial<ISocial>;
  const result = await Social.findByIdAndUpdate(socialId, social);
  if (!result) {
    return res.status(StatusCode.NOT_FOUND).json({ message: 'Social not found' });
  }
  res.json({ ok: true, message: 'Social updated successfully' });
};

export const deactivate = async (req: Request, res: Response): Promise<any> => {
  const socialId = req.params.id;
  const update = { active: false };

  const social = await Social.findByIdAndUpdate(socialId, update);

  if (!social) {
    return res.status(StatusCode.NOT_FOUND).json({ ok: false, message: 'Social not found' });
  }

  await User.updateMany({}, { $pull: { socials: { social: socialId } } }, { multi: true });
  res.json({ ok: true, message: 'Social deactivated successfully' });
};
