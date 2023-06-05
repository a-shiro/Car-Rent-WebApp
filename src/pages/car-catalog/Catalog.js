import { AsideFilters } from "./components/AsideFilters";
import { CarList } from "./components/CarList";
import "./Catalog.css";

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
