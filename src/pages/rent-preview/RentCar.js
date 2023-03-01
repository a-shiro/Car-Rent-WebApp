export const RentCar = () => {
  return (
    <div>
      <h1>Rent {">>Car Name Here<<"}</h1>
      <div style={{ display: "flex" }}>
        <img src="https://www.topgear.com/sites/default/files/2021/12/topgear_-_shelby_gt500-_002.jpg?w=424&h=239" />

        <div>
          <div>
            <h2>from $$$ per day</h2>
            <p>Minimum rental period is 2 days.</p>
          </div>

          <div>
            <h2>Car specs</h2>
            <p>Engine: 4.5</p>
            <p>HP: 570</p>
            <p>0-100: 3.5</p>
            <p>Top speed: 360</p>
          </div>

          <button>Rent now</button>
        </div>
      </div>

      <div>
        <p>Description</p>
        <p>Available in</p>
      </div>
    </div>
  );
};
