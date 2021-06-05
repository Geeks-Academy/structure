import StatusCode from '../../utils/StatusCode';
import { Request, Response } from 'express';
import { cloudinary } from '../cloudinary';
import fetch from 'node-fetch';

const cloudinaryUpload = async (image: string, options?: any) => {
  return new Promise((resolve: any, reject: any) => {
    cloudinary.v2.uploader.upload(image, options, (error: any, result: any) => {
      if (error) return reject(error);
      return resolve(result);
    });
  });
};

export const detectImage = async (photoObject: any) => {
  const { version, public_id, format } = photoObject;
  const baseUrl = 'https://res.cloudinary.com';
  const cloudName = process.env.CLOUDINARY_NAME;
  const params = 'c_thumb,g_face,w_300,h_300';
  const info = 'fl_getinfo';

  const infoUrl = `${baseUrl}/${cloudName}/image/upload/${params}/${info}/v${version}/${public_id}.${format}`;
  const imageUrl = `${baseUrl}/${cloudName}/image/upload/${params}/v${version}/${public_id}.${format}`;

  let hasFace = false;
  await fetch(infoUrl)
    .then((res: any) => res.json())
    .then((body: any) => {
      hasFace = !!body.landmarks[0].length;
    });

  return hasFace ? { path: imageUrl } : { message: "Are you kidding me? It's not a human." };
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
