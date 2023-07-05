import { useEffect, useState } from "react";
import "../Catalog.css";

export const AsideFilters = ({
  typeValue,
  brandValue,
  priceValues,
  setPriceValues,
  powerValues,
  setPowerValues,
}) => {
  const [filtersWrapper, setFiltersWrapper] = useState(null);
  const [typeDropdownList, setTypeDropdownList] = useState(null);
  const [brandDropdownList, setBrandDropdownList] = useState(null);

  const [priceStartValue, setPriceStartValue] = useState(priceValues.start);
  const [priceEndValue, setPriceEndValue] = useState(priceValues.end);
  const [powerStartValue, setPowerStartValue] = useState(powerValues.start);
  const [powerEndValue, setPowerEndValue] = useState(powerValues.end);

  useEffect(() => {
    if (!filtersWrapper) {
      setFiltersWrapper(document.querySelector(".filters-wrapper-catalog"));
      setTypeDropdownList(document.querySelector(".type-filter-catalog ul"));
      setBrandDropdownList(document.querySelector(".brand-filter-catalog ul"));
    }

    document.getElementById("price-start").value = priceStartValue;
    document.getElementById("price-end").value = priceEndValue;
    document.getElementById("power-start").value = powerStartValue;
    document.getElementById("power-end").value = powerEndValue;
  }, [priceStartValue, priceEndValue, powerStartValue, powerEndValue]);

  const toggleFiltersVisibility = () => {
    filtersWrapper.classList.toggle("visible");
  };

  const toggleDropdownVisibility = (e) => {
    const list = document.querySelector(
      `.${e.target.parentElement.className} ul`
    );

    if (list === typeDropdownList) {
      brandDropdownList.classList.remove("visible");
      typeDropdownList.classList.toggle("visible");
      return;
    }

    typeDropdownList.classList.remove("visible");
    brandDropdownList.classList.toggle("visible");
  };

  const changeOptionHandler = (e) => {
    const newValue = e.target.textContent;

    e.target.parentElement.id === "type"
      ? typeValue.setValue(newValue)
      : brandValue.setValue(newValue);

    typeDropdownList.classList.remove("visible");
    brandDropdownList.classList.remove("visible");
  };

  const changeRangeHandler = (e, valueChanger, displayedValueChanger) => {
    const newValue = Number(e.target.value);

    valueChanger(newValue);
    displayedValueChanger(newValue);
  };

  const clearFilters = () => {
    typeValue.setValue("All cars");
    brandValue.setValue("All brands");

    setPriceValues.setStart(100);
    setPriceValues.setEnd(20000);
    setPowerValues.setStart(250);
    setPowerValues.setEnd(1500);

    setPriceStartValue(100);
    setPriceEndValue(20000);
    setPowerStartValue(250);
    setPowerEndValue(1500);
  };

  return (
    <div>
      <div className="filters-dropdown-catalog">
        <button onClick={toggleFiltersVisibility}>Filters &darr;</button>
      </div>

      <div className="filters-wrapper-catalog">
        <div className="type-filter-catalog">
          <span>Car Type</span>
          <button
            className="filter-button-catalog"
            onClick={toggleDropdownVisibility}
          >
            {typeValue.value}
          </button>

          <ul
            id="type"
            onClick={changeOptionHandler}
            className="filter-list-catalog"
          >
            <li>All cars</li>
            <li>Convertible</li>
            <li>SUV</li>
            <li>Sports car</li>
            <li>Hyper car</li>
            <li>Luxury Sedan</li>
          </ul>
        </div>

        <div className="brand-filter-catalog">
          <span>Brand</span>
          <button
            className="filter-button-catalog"
            onClick={toggleDropdownVisibility}
          >
            {brandValue.value}
          </button>
          <ul
            id="brand"
            onClick={changeOptionHandler}
            className="filter-list-catalog"
          >
            <li>All brands</li>
            <li>Porsche</li>
            <li>Lamborghini</li>
            <li>Ferrari</li>
            <li>Bentley</li>
            <li>McLaren</li>
          </ul>
        </div>

        <div className="price-filter-catalog">
          <span>Price range</span>
          <div>
            <input
              id="price-start"
              onChange={(e) =>
                changeRangeHandler(
                  e,
                  setPriceValues.setStart,
                  setPriceStartValue
                )
              }
              defaultValue={priceValues.start}
              name="priceRangeFrom"
              type="number"
              placeholder="from $"
            />
            <input
              id="price-end"
              onChange={(e) =>
                changeRangeHandler(e, setPriceValues.setEnd, setPriceEndValue)
              }
              defaultValue={priceValues.end}
              name="priceRangeTo"
              type="number"
              placeholder="to $"
            />
          </div>
        </div>

        <div className="power-filter-catalog">
          <span>Horse power</span>
          <div>
            <input
              id="power-start"
              onChange={(e) =>
                changeRangeHandler(
                  e,
                  setPowerValues.setStart,
                  setPowerStartValue
                )
              }
              defaultValue={powerValues.start}
              type="number"
              placeholder="from $"
            />
            <input
              id="power-end"
              onChange={(e) =>
                changeRangeHandler(e, setPowerValues.setEnd, setPowerEndValue)
              }
              defaultValue={powerValues.end}
              type="number"
              placeholder="to $"
            />
          </div>
        </div>

        <div>
          <button onClick={clearFilters} className="clear-filters-catalog">
            Clear Filters
          </button>
        </div>
      </div>
    </div>
  );
};
