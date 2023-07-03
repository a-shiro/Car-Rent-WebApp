import { AsideFilters } from "./components/AsideFilters";
import { CarList } from "./components/CarList";
import "./Catalog.css";

const Catalog = () => {
  return (
    <main>
      <section>
        <div className="container-catalog">
          <AsideFilters />
          <CarList />
        </div>
      </section>
    </main>
  );
};

export default Catalog;
