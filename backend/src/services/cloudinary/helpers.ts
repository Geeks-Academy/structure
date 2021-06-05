import StatusCode from '../../utils/StatusCode';
import fetch from 'node-fetch';
import { IDetectedImageResponse } from './types';
import { Request, Response } from 'express';
import { cloudinary } from '../cloudinary';

const cloudinaryUpload = async (image: string, options?: any) => {
  return new Promise((resolve: any, reject: any) => {
    cloudinary.v2.uploader.upload(image, options, (error: any, result: any) => {
      if (error) return reject(error);
      return resolve(result);
    });
  });
};

export const detectImage = async (photoObject: any): Promise<IDetectedImageResponse> => {
  const baseUrl = 'https://res.cloudinary.com';
  const cloudName = process.env.CLOUDINARY_NAME;
  const params = 'c_thumb,g_face,w_300,h_300';
  const info = 'fl_getinfo';

  const { version, public_id, format } = photoObject;

  const infoUrl = `${baseUrl}/${cloudName}/image/upload/${params}/${info}/v${version}/${public_id}.${format}`;
  const imageUrl = `${baseUrl}/${cloudName}/image/upload/${params}/v${version}/${public_id}.${format}`;

  const errorMessage = `Are you kidding me? It's not a human.`;
  const successMessage = 'Successfully uploaded';

  return await fetch(infoUrl)
    .then((res: any) => res.json())
    .then((body: any) => ({
      message: body.landmarks[0].length ? successMessage : errorMessage,
      url: body.landmarks[0].length ? imageUrl : null,
    }));
};

export const uploadImage = async (req: Request, res: Response): Promise<Response> => {
  try {
    const image = req.body.image;
    const uploadResult = await cloudinaryUpload(image, {
      upload_preset: 'user_images',
    });

    const data = await detectImage(uploadResult);

    return res.json({ data });
  } catch (error) {
    return res.status(StatusCode.INTERNAL_SERVER_ERROR).json({ message: error.message });
  }
};
