import { Schema, model } from 'mongoose';

const socialModel = new Schema({
  name: String,
  image: String,
  active: Boolean
});

export default model('Social', socialModel);
