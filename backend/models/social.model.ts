import { Schema, model, Document } from 'mongoose';

export interface ISocial extends Document {
  name: string;
  image: string;
  active: boolean;
}

const socialModel = new Schema({
  name: String,
  image: String,
  active: Boolean
});

export default model<ISocial>('Social', socialModel);
