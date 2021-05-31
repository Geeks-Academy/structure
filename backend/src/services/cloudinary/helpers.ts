import { Request, Response } from 'express';
import StatusCode from '../../utils/StatusCode';
import { cloudinary } from '../cloudinary';

const cloudinaryUpload = async (image: string, options?: any) => {
  return new Promise((resolve: any, reject: any) => {
    cloudinary.v2.uploader.upload(image, options, (error: any, result: any) => {
      if (error) return reject(error);
      return resolve(result);
    });
  });
};

export const uploadImage = async (req: Request, res: Response): Promise<Response> => {
  try {
    const image = req.body.image;
    const uploadResult = await cloudinaryUpload(image, { upload_preset: 'user_images' });

    return res.json({ message: 'Successfully upload image', data: uploadResult });
  } catch (error) {
    return res.status(StatusCode.INTERNAL_SERVER_ERROR).json({ message: error.message });
  }
};
