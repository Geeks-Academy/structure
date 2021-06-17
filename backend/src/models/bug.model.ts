import { Schema, model, Document } from 'mongoose';
export interface IBug  {
  errorMsg: string;
  stackTrace?: string;
  file: string;
  method: string;
}

export interface IBugAttached extends IBug {
  _id: string;
}

type IBugDocument = Document & IBugAttached;

const bugSchema = new Schema({
  errorMsg: String,
  stackTrace: String,
  file: String,
  method: String,
});

export default model<IBugDocument>('Bug', bugSchema);
