import Bug, { IBug } from '../models/bug.model';

export const getAllBugs = async (): Promise<IBug[]> => {
  return await Bug.find({});
};

export const createNewBug = async (bug: IBug): Promise<IBug> => {
  return await Bug.create(bug);
};