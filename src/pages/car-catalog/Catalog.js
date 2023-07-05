import { useEffect, useState } from "react";
import { AsideFilters } from "./components/AsideFilters";
import { CardsWrapper } from "./components/CardsWrapper";
import "./Catalog.css";

const Catalog = () => {
  const [carTypeValue, setCarTypeValue] = useState("All cars");
  const [carBrandValue, setCarBrandValue] = useState("All brands");
  const [startPriceValue, setStartPriceValue] = useState(100);
  const [endPriceValue, setEndPriceValue] = useState(20000);
  const [startPowerValue, setStartPowerValue] = useState(250);
  const [endPowerValue, setEndPowerValue] = useState(1500);

  useEffect(() => {
    // console.log(startPriceValue, endPriceValue);
    // console.log(startPowerValue, endPowerValue);
    // console.log(carTypeValue, carBrandValue);
    // ToDo: Add filtering query here and send the list to CardsWrapper
  }, [
    carTypeValue,
    carBrandValue,
    startPriceValue,
    endPriceValue,
    startPowerValue,
    endPowerValue,
  ]);

  return (
    <main>
      <section>
        <div className="container-catalog">
          <AsideFilters
            typeValue={{ value: carTypeValue, setValue: setCarTypeValue }}
            brandValue={{ value: carBrandValue, setValue: setCarBrandValue }}
            priceValues={{ start: startPriceValue, end: endPriceValue }}
            setPriceValues={{
              setStart: setStartPriceValue,
              setEnd: setEndPriceValue,
            }}
            powerValues={{ start: startPowerValue, end: endPowerValue }}
            setPowerValues={{
              setStart: setStartPowerValue,
              setEnd: setEndPowerValue,
            }}
          />
          <CardsWrapper />
        </div>
      </section>
    </main>
  );
};

export default Catalog;
