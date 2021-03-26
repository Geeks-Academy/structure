import { Request, Response } from 'express';
import socialModel, { ISocial } from '../models/social.model';

export const getAllSocials = async (_req: Request, res: Response) => {
  try {
    const socials = await socialModel.find();
    res.json(socials);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
}

export const getOne = async (req: Request, res: Response) => {
  const socialId = req.params.id;
  try {
    const social = await socialModel.findOne({ _id: socialId });
    res.json(social);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
}

export const createSocial = async (req: Request, res: Response) => {
  const social = req.body;
  try {
    const result = await socialModel.create(social);
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
    await socialModel.updateOne({ _id: socialId }, social);
    res.json({ ok: true, message: 'Social updated successfully' });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
}
