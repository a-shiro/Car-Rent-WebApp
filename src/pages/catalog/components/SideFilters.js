export const SideFilters = () => {
  return (
    <aside>
      <div>
        <label>Car Type</label>
        <select>
          <option>All Cars</option>
          <option>Convertible</option>
          <option>SUV</option>
          <option>Minivan</option>
          <option>Luxury</option>
          <option>Sports Car</option>
        </select>
      </div>

      <div>
        <label>Brand</label>
        <select>
          <option>All Brands</option>
        </select>
      </div>

      <div>
        <label>Price range</label>
        <input placeholder="from" />
        <input placeholder="to" />
      </div>
    </aside>
  );
};
