import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommentCreateInput = {
  content?: string | null;
  createdDate?: Date | null;
  updatedDate?: Date | null;
  user?: UserWhereUniqueInput | null;
};
