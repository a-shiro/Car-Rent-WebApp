import { useEffect, useState } from "react";
import { AsideFilters } from "./components/AsideFilters";
import { CardsWrapper } from "./components/CardsWrapper";
import { where } from "firebase/firestore";
import { getDataWhere } from "../../services/queries";
import "./Catalog.css";

const Catalog = () => {
  const [carTypeValue, setCarTypeValue] = useState("All cars");
  const [carBrandValue, setCarBrandValue] = useState("All brands");
  const [startPriceValue, setStartPriceValue] = useState(100);
  const [endPriceValue, setEndPriceValue] = useState(20000);
  const [startPowerValue, setStartPowerValue] = useState(250);
  const [endPowerValue, setEndPowerValue] = useState(1500);

  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    const queryData = async () => {
      const queryConditions = [];

      if (carTypeValue !== "All cars")
        queryConditions.push(where("type", "==", carTypeValue));

      if (carBrandValue !== "All brands")
        queryConditions.push(where("brand", "==", carBrandValue));

      queryConditions.push(where("price", ">=", startPriceValue));
      queryConditions.push(where("price", "<=", endPriceValue));

      let data = await getDataWhere("cars", queryConditions);

      data = data.filter(
        (obj) =>
          startPowerValue <= obj.horsePower && obj.horsePower <= endPowerValue
      );

      setDataList(data);
    };

    queryData();
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
            typeValue={{
              value: carTypeValue,
              setValue: setCarTypeValue,
            }}
            brandValue={{
              value: carBrandValue,
              setValue: setCarBrandValue,
            }}
            priceValues={{
              start: startPriceValue,
              end: endPriceValue,
            }}
            setPriceValues={{
              setStart: setStartPriceValue,
              setEnd: setEndPriceValue,
            }}
            powerValues={{
              start: startPowerValue,
              end: endPowerValue,
            }}
            setPowerValues={{
              setStart: setStartPowerValue,
              setEnd: setEndPowerValue,
            }}
          />
          <CardsWrapper dataList={dataList} />
        </div>
      </section>
    </main>
  );
};

export default Catalog;
