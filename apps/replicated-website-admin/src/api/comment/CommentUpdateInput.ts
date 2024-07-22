import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommentUpdateInput = {
  content?: string | null;
  createdDate?: Date | null;
  updatedDate?: Date | null;
  user?: UserWhereUniqueInput | null;
};
