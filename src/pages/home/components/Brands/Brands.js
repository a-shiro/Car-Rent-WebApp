import { useEffect, useState } from "react";
import { getData } from "../../../../services/queries";
import { Card } from "./Card";
import "./Brands.css";

const Brands = () => {
  const [brandsList, setBrandsList] = useState([]);

  useEffect(() => {
    const queryBrands = async () => {
      const brands = await getData("brands");

      setBrandsList(brands);
    };

    queryBrands();
  }, []);

  return (
    <section className="brand-section">
      <div>
        <div className="brand-section-clip-top"></div>
        <div className="brand-section-clip-bottom"></div>

        <h1>Available Brands</h1>

        <div className="brands-card-wrapper">
          {brandsList.map((brand) => (
            <Card data={brand} key={brand.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
