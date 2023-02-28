export const Catalog = () => {
  return (
    <div>
      <div>
        <h1>Rent luxury cars</h1>
        <p>Choose a premium rental car</p>
      </div>

      <div style={{ display: "flex" }}>
        <div className="filters">
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
        </div>

        <div
          className="car-list"
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-around",
            flex: "1",
          }}
        >
          <img src="https://www.topgear.com/sites/default/files/2021/12/topgear_-_shelby_gt500-_002.jpg?w=424&h=239" />
          <img src="https://www.topgear.com/sites/default/files/2021/12/topgear_-_shelby_gt500-_002.jpg?w=424&h=239" />
          <img src="https://www.topgear.com/sites/default/files/2021/12/topgear_-_shelby_gt500-_002.jpg?w=424&h=239" />
          <img src="https://www.topgear.com/sites/default/files/2021/12/topgear_-_shelby_gt500-_002.jpg?w=424&h=239" />
          <img src="https://www.topgear.com/sites/default/files/2021/12/topgear_-_shelby_gt500-_002.jpg?w=424&h=239" />
          <img src="https://www.topgear.com/sites/default/files/2021/12/topgear_-_shelby_gt500-_002.jpg?w=424&h=239" />
          <img src="https://www.topgear.com/sites/default/files/2021/12/topgear_-_shelby_gt500-_002.jpg?w=424&h=239" />
          <img src="https://www.topgear.com/sites/default/files/2021/12/topgear_-_shelby_gt500-_002.jpg?w=424&h=239" />
          <img src="https://www.topgear.com/sites/default/files/2021/12/topgear_-_shelby_gt500-_002.jpg?w=424&h=239" />
        </div>
      </div>
    </div>
  );
};
