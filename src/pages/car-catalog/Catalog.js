import "./Catalog.css";
import { AsideFilters } from "./components/AsideFilters/AsideFilters";
import { CarList } from "./components/CarList";

const Catalog = () => {
  return (
    <main>
      <section className="catalog-section">
        <div className="catalog-container">
          <AsideFilters />
          <CarList />
        </div>
      </section>
    </main>
  );
};

export default Catalog;
