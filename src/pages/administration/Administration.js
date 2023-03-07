import { CollectionTable } from "./components/CollectionTable/CollectionTable";
import { CreateForm } from "./components/CreateForm";

export const Administration = () => {
  return (
    <div>
      <h1>Admin panel</h1>
      <CreateForm />
      <CollectionTable />
    </div>
  );
};
