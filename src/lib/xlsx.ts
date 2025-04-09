import xlsx, { IJsonSheet } from "json-as-xlsx";

import { people } from "@/Data/people";

export const downloadToExcel = () => {
  let columns: IJsonSheet[] = [
    {
      sheet: "People",
      columns: [
        { label: "Person ID", value: "id" },
        { label: "First Name", value: "first_name" },
        { label: "Last Name", value: "last_name" },
        { label: "Email", value: "email" },
        { label: "Gender", value: "gender" },
        {
          label: "Date of Birth",
          value: (row:any) => new Date(row.date_of_birth).toLocaleDateString(),
        },
      ],
      content: people,
    },
  ];

  let settings = {
    fileName: "people Excel",
  };

  xlsx(columns, settings);
};
