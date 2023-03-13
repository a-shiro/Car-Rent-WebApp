import { CarList } from "./components/CarList";
import { AsideFilters } from "./components/AsideFilters/AsideFilters";

export const Catalog = () => {
  return (
    <main>
      <header>
        <h1>Rent luxury cars</h1>
        <h2>Choose a premium rental car</h2>
      </header>
      <div style={{ display: "flex" }}>
        <AsideFilters />
        <CarList />
      </div>
    </main>
  );
};
