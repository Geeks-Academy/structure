import { Request, Response } from 'express';
import { detectImage, cloudinaryUpload, deleteImage } from '../services/cloudinary';

export const upload = async (req: Request, res: Response): Promise<Response> => {
  const image = req.body.image;
  const uploadResult: any = await cloudinaryUpload(image, {
    upload_preset: process.env.UPLOAD_PRESET,
  });

  const data = await detectImage(uploadResult);

  if (!data.url) {
    deleteImage(uploadResult.public_id);
  }

  return res.json({ data });
};
