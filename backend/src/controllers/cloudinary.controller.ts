import { Request, Response } from 'express';
import StatusCode from '../utils/StatusCode';
import { detectImage, cloudinaryUpload } from '../services/cloudinary';

export const upload = async (req: Request, res: Response): Promise<Response> => {
  try {
    const image = req.body.image;
    const uploadResult = await cloudinaryUpload(image, {
      upload_preset: process.env.UPLOAD_PRESET,
    });

    const data = await detectImage(uploadResult);

    return res.json({ data });
  } catch (error) {
    return res.status(StatusCode.INTERNAL_SERVER_ERROR).json({ message: error.message });
  }
};
