import { useEffect, useState } from "react";
import { getData } from "../../../../services/queries";
import { Card } from "./Card";
import mercedesVector from "../../../../assets/svgs/mercedes-vector.svg";
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
    <section className="section-brands">
      <div>
        <div className="section-clip-bottom"></div>
        <img
          className="background-image-brands"
          src={mercedesVector}
          alt="mercedes-vector"
        />

        <h1>Available Brands</h1>

        <div className="card-wrapper-brands">
          {brandsList.map((brand) => (
            <Card data={brand} key={brand.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
