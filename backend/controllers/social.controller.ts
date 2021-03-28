import { Request, Response } from 'express';
import Social, { ISocial } from '../models/social.model';

export const getAll = async (_req: Request, res: Response) => {
  try {
    const socials = await Social.find();
    if (socials.length === 0) {
      return res.status(403).json({ message: 'Not found any socials' });
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
    if (!social) {
      return res.status(404).json({ message: 'Social not found' });
    }
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
