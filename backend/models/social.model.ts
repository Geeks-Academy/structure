import { Schema, model, Document } from 'mongoose';

export interface ISocial extends Document {
  name: string;
  image: string;
  active?: boolean;
}

const socialSchema = new Schema({
  name: String,
  image: String,
  active: { type: Boolean, default: true }
});

export default model<ISocial>('Social', socialSchema);
