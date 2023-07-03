import { useEffect, useState } from "react";
import "../Catalog.css";

export const AsideFilters = () => {
  const [filtersWrapper, setFiltersWrapper] = useState(null);
  const [typeDropdownList, setTypeDropdownList] = useState(null);
  const [brandDropdownList, setBrandDropdownList] = useState(null);

  useEffect(() => {
    setFiltersWrapper(document.querySelector(".filters-wrapper-catalog"));
    setTypeDropdownList(document.querySelector(".type-filter-catalog ul"));
    setBrandDropdownList(document.querySelector(".brand-filter-catalog ul"));
  }, []);

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

  const clickHandler = (e) => {
    const nameDisplay = e.target.parentElement.parentElement.children[1];

    // ToDo: Add filtered query to DB

    nameDisplay.textContent = e.target.textContent;
    typeDropdownList.classList.remove("visible");
    brandDropdownList.classList.remove("visible");
  };

  const clearFilters = () => {
    document.querySelector(
      ".type-filter-catalog .filter-button-catalog"
    ).textContent = "All cars";
    document.querySelector(
      ".brand-filter-catalog .filter-button-catalog"
    ).textContent = "All brands";
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
            All cars
          </button>

          <ul onClick={clickHandler} className="filter-list-catalog">
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
            All brands
          </button>
          <ul onClick={clickHandler} className="filter-list-catalog">
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
              defaultValue={500}
              name="priceRangeFrom"
              type="number"
              placeholder="from $"
            />
            <input
              defaultValue={2000}
              name="priceRangeTo"
              type="number"
              placeholder="to $"
            />
          </div>
        </div>

        <div className="power-filter-catalog">
          <span>Horse power</span>
          <div>
            <input defaultValue={150} type="number" placeholder="from" />
            <input defaultValue={1500} type="number" placeholder="to" />
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
