import { CarList } from "./CarList";
import { SideFilters } from "./SideFilters";

export const Catalog = () => {
  return (
    <div>
      <div>
        <h1>Rent luxury cars</h1>
        <h2>Choose a premium rental car</h2>
      </div>

      <div style={{ display: "flex" }}>
        <SideFilters />
        <CarList />
      </div>
    </div>
  );
};
