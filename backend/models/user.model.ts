import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  name: String,
  title: String,
  openToWork: { type: Boolean, default: true },
  manager: { type: Boolean, default: false },
  boss: { type: Schema.Types.ObjectId, ref: 'User', default: null },
  image: String,
  socials: [ { link: String, social: { type: Schema.Types.ObjectId, ref: 'Social' } } ],
  active: { type: Boolean, default: true }
})

export default model('User', userSchema);
