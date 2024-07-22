import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ContentWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  body?: StringNullableFilter;
  createdDate?: DateTimeNullableFilter;
  updatedDate?: DateTimeNullableFilter;
};
