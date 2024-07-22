import { User } from "../user/User";

export type Comment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  content: string | null;
  createdDate: Date | null;
  updatedDate: Date | null;
  user?: User | null;
};
