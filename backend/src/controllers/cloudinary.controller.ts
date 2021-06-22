import { Request, Response } from 'express';
import StatusCode from '../utils/StatusCode';
import { detectImage, cloudinaryUpload, deleteImage } from '../services/cloudinary';

export const upload = async (req: Request, res: Response): Promise<Response> => {
  try {
    const image = req.body.image;
    const uploadResult: any = await cloudinaryUpload(image, {
      upload_preset: process.env.UPLOAD_PRESET,
    });

    const data = await detectImage(uploadResult);

    if (!data.url) {
      deleteImage(uploadResult.public_id);
    }

    return res.json({ data });
  } catch (error) {
    return res.status(StatusCode.INTERNAL_SERVER_ERROR).json({ message: error.message });
  }
};
