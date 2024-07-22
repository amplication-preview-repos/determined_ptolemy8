import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ContentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="title" source="title" />
        <TextInput label="body" multiline source="body" />
        <DateTimeInput label="createdDate" source="createdDate" />
        <DateTimeInput label="updatedDate" source="updatedDate" />
      </SimpleForm>
    </Edit>
  );
};
