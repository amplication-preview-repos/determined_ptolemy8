import { SortOrder } from "../../util/SortOrder";

export type CommentOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  content?: SortOrder;
  createdDate?: SortOrder;
  updatedDate?: SortOrder;
  userId?: SortOrder;
};
