import { SelectDropdown } from "./components/SelectDropdown";

export const AsideFilters = () => {
  const carTypes = [
    "All cars",
    "Convertible",
    "SUV",
    "Sports Car",
    "Hyper Car",
    "Luxury Sedan",
  ];

  // ToDo: replace carBrands array with query from database
  const carBrands = [
    "Lamborghini",
    "Ferrari",
    "Pagani",
    "Bugatti",
    "McLaren",
    "Aston Martin",
    "Porsche",
    "Rolls Royce",
    "Mercedes-Benz",
  ];

  return (
    <aside>
      <div>
        <p>Car Type</p>
        <SelectDropdown options={carTypes} />
      </div>
      <div>
        <p>Brand</p>
        <SelectDropdown options={carBrands} />
        {/* ToDo: add a brands collection to the database and
           query a brand element here to display all brands */}
      </div>
      <div>
        <label id="priceRange">Price range</label>
        <input
          name="priceRangeFrom"
          type="number"
          htmlFor="priceRange"
          placeholder="from"
        />
        <input
          name="priceRangeTo"
          type="number"
          htmlFor="priceRange"
          placeholder="to"
        />
      </div>
    </aside>
  );
};
