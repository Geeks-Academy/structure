import { Request, Response } from 'express';
import { detectImage, cloudinaryUpload, deleteImage } from '../services/cloudinary';
import env from './../env';

export const upload = async (req: Request, res: Response): Promise<any> => {
  const image = req.body.image;
  const uploadResult: any = await cloudinaryUpload(image, {
    upload_preset: env.UPLOAD_PRESET,
  });

  const data = await detectImage(uploadResult);

  if (!data.url) {
    deleteImage(uploadResult.public_id);
  }

  return res.json({ data });
};
