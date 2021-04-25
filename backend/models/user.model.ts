import { Schema, model, Document } from 'mongoose';
import { ISocial } from './social.model';

export interface IUser extends Document {
  name: string;
  title: string;
  openToWork: boolean;
  manager: boolean;
  boss: IUser['_id'] | null;
  image?: string;
  socials?: [{ link: string; social: ISocial['_id'] }];
  active: boolean;
}

const userSchema = new Schema({
  name: String,
  title: String,
  openToWork: { type: Boolean, default: true },
  manager: { type: Boolean, default: false },
  boss: { type: Schema.Types.ObjectId, ref: 'User', default: null },
  image: String,
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
