import { Schema, model, Document } from 'mongoose';

export interface IBug extends Document {
  errorMsg: string;
  stackTrace: string;
  file: string;
  method: string;
}

export interface IBugAttached extends IBug {
  _id: string;
}

const bugSchema = new Schema({
  errorMsg: String,
  stackTrace: String,
  file: String,
  method: String,
});

export default model<IBug>('Bug', bugSchema);
