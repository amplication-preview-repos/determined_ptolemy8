import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommentWhereInput = {
  id?: StringFilter;
  content?: StringNullableFilter;
  createdDate?: DateTimeNullableFilter;
  updatedDate?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
