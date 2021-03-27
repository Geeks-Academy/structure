import { Request, Response } from 'express';
import HttpError from '../utils/error';
import Social, { ISocial } from '../models/social.model';

export const getAll = async (_req: Request, res: Response) => {
  try {
    const socials = await Social.find();
    if (socials.length === 0) {
      throw new HttpError('Not found any socials', 404);
    }
    res.json(socials);
  } catch (error) {
    console.log(error);
    res.status(error.code || 500).json({ message: error.message });
  }
}

export const getOne = async (req: Request, res: Response) => {
  const socialId = req.params.id;
  try {
    const social = await Social.findOne({ _id: socialId });
    res.json(social);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
}

export const createSocial = async (req: Request, res: Response) => {
  const social = req.body;
  try {
    const result = await Social.create(social);
    res.status(201).json(result);
  } catch (error) {
    console.log(error)
    res.send(error);
  }
}

export const updateSocial = async (req: Request, res: Response) => {
  const socialId = req.params.id
  const social = req.body as Partial<ISocial>
  try {
    await Social.updateOne({ _id: socialId }, social);
    res.json({ ok: true, message: 'Social updated successfully' });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
}
