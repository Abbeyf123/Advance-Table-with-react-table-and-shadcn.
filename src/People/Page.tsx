import DataTable from "./DataTable";
import { columns } from "./Columns";
import { people } from "@/Data/people";

const People = () => {
  return (
    <div className="container py-10 mx-auto">
      <DataTable columns={columns} data={people} />
    </div>
  );
};

export default People;
