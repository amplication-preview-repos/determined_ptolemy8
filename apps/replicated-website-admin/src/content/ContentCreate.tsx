import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ContentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="title" source="title" />
        <TextInput label="body" multiline source="body" />
        <DateTimeInput label="createdDate" source="createdDate" />
        <DateTimeInput label="updatedDate" source="updatedDate" />
      </SimpleForm>
    </Create>
  );
};
