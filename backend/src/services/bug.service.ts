import Bug, { IBug, IBugAttached } from '../models/bug.model';

export interface IBugService {
  getAllBugs: () => Promise<IBugAttached[]>;
  createNewBug: (bug: IBug) => Promise<IBugAttached>
}

class BugService implements IBugService {
 public getAllBugs = async (): Promise<IBugAttached[]> => {
    return await Bug.find({});
  };

  public createNewBug = async (bug: IBug): Promise<IBugAttached> => {
    return await Bug.create(bug);
  };
}

export const bugService = new BugService();

