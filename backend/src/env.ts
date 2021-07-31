import dotenv from 'dotenv';
dotenv.config();

const env = {
  CLIENT_URL: process.env.CLIENT_URL,
  UPLOAD_PRESET: process.env.UPLOAD_PRESET,
  MONGO_CONNECTION_STRING: process.env.MONGO_CONNECTION_STRING,
  CLOUDINARY_NAME: process.env.CLOUDINARY_NAME,
  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
};

export default env;
