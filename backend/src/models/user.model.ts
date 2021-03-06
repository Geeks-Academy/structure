import { Schema, model, Document } from 'mongoose';
import { ISocial } from './social.model';

export interface IUser extends Document {
  name: string;
  title: string;
  email: string;
  openToWork: boolean;
  manager: boolean;
  boss: string;
  image?: string;
  socials?: [{ link: string; social: ISocial['_id'] }];
  active: boolean;
}

const userSchema = new Schema({
  name: String,
  title: String,
  email: { type: String, required: true, unique: true },
  openToWork: { type: Boolean, default: true },
  manager: { type: Boolean, default: false },
  boss: { type: Schema.Types.ObjectId, ref: 'User', null: true, default: null },
  image: { type: String, default: '' },
  socials: [
    {
      _id: false,
      link: { type: String, required: true },
      social: { type: Schema.Types.ObjectId, ref: 'Social', required: true },
    },
  ],
  active: { type: Boolean, default: true },
});

export default model<IUser>('User', userSchema);
