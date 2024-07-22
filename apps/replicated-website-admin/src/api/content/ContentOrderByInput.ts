import { SortOrder } from "../../util/SortOrder";

export type ContentOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  title?: SortOrder;
  body?: SortOrder;
  createdDate?: SortOrder;
  updatedDate?: SortOrder;
};
