import { IDetectedImageResponse } from './types';
import { cloudinary } from '../cloudinary';
import axios from 'axios';

export const cloudinaryUpload = async (image: string, options?: any) => {
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

  const { data } = await axios.get(infoUrl);
  const hasFace = data.landmarks[0].length;

  return {
    url: hasFace ? imageUrl : null,
    message: !hasFace ? errorMessage : null,
  };
};

export const deleteImage = async (publicId: string) =>
  await cloudinary.v2.uploader.destroy(publicId);
