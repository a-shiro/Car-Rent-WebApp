import { CarList } from "./components/CarList";
import { SideFilters } from "./components/SideFilters";

export const Catalog = () => {
  return (
    <main>
      <header>
        <h1>Rent luxury cars</h1>
        <h2>Choose a premium rental car</h2>
      </header>
      <div style={{ display: "flex" }}>
        <SideFilters />
        <CarList />
      </div>
    </main>
  );
};
