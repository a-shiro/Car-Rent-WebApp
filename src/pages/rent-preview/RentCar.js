import { useLocation } from "react-router-dom";

export const RentCar = () => {
  const location = useLocation();
  const { car } = location.state;

  return (
    <div>
      <h1>
        Rent {car.brand} {car.model}
      </h1>
      <div style={{ display: "flex" }}>
        <img src={car.imgUrl} width="400px" height="250px" />

        <div>
          <div>
            <h2>from {car.pricePerDay}$ per day</h2>
            <p>Minimum rental period is 2 days.</p>
          </div>

          <div>
            <h2>Car specs</h2>
            <p>Engine: {car.engine}</p>
            <p>HP: {car.HP}</p>
            <p>0-100: {car.zeroToSixty}</p>
            <p>Top speed: {car.topSpeed}</p>
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
