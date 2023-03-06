import { useState } from "react";
import { CollectionRow } from "./components/CollectionRow/CollectionRow";
import { addDoc, collection } from "firebase/firestore";
import { database } from "../../setup/config/firebase";

export const Administration = () => {
  const [carBrand, setCarBrand] = useState("");
  const [carModel, setCarModel] = useState("");
  const [carType, setCarType] = useState("");
  const [carEngine, setCarEngine] = useState("");
  const [carHP, setCarHP] = useState("");
  const [carImgUrl, setCarImgUrl] = useState("");
  const [carPricePerDay, setCarPricePerDay] = useState("");
  const [carTopSpeed, setCarTopSpeed] = useState("");
  const [carZeroToSixty, setCarZeroToSixty] = useState("");

  const onSubmitCar = async (e) => {
    e.preventDefault();
    try {
      console.log("here");
      await addDoc(collection(database, "cars"), {
        Brand: carBrand,
        Model: carModel,
        Type: carType,
        Engine: carEngine,
        HP: carHP,
        imgUrl: carImgUrl,
        pricePerDay: carPricePerDay,
        topSpeed: carTopSpeed,
        zeroToSixty: carZeroToSixty,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Admin panel</h1>
      <div>
        <form onSubmit={onSubmitCar} style={{ marginBottom: "1em" }}>
          <input
            onChange={(e) => setCarBrand(e.target.value)}
            placeholder="Brand"
            type="text"
            required
          />
          <input
            onChange={(e) => setCarModel(e.target.value)}
            placeholder="Model"
            type="text"
            required
          />
          <input
            onChange={(e) => setCarType(e.target.value)}
            placeholder="Type"
            type="text"
            required
          />
          <input
            onChange={(e) => setCarEngine(e.target.value)}
            placeholder="Engine"
            type="text"
            required
          />
          <input
            onChange={(e) => setCarHP(Number(e.target.value))}
            placeholder="HP"
            type="number"
            required
          />
          <input
            onChange={(e) => setCarImgUrl(e.target.value)}
            placeholder="imgUrl"
            type="text"
          />
          <input
            onChange={(e) => setCarPricePerDay(Number(e.target.value))}
            placeholder="pricePerDay"
            type="number"
            required
          />
          <input
            onChange={(e) => setCarTopSpeed(Number(e.target.value))}
            placeholder="topSpeed"
            type="number"
            required
          />
          <input
            onChange={(e) => setCarZeroToSixty(Number(e.target.value))}
            placeholder="zeroToSixty"
            type="number"
            required
          />
          <button>Add</button>
        </form>
      </div>

      <table style={{ border: "1px solid" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid" }}>Brand</th>
            <th style={{ border: "1px solid" }}>Model</th>
            <th style={{ border: "1px solid" }}>Type</th>
            <th style={{ border: "1px solid" }}>Engine</th>
            <th style={{ border: "1px solid" }}>HP</th>
            <th style={{ border: "1px solid" }}>imgUrl</th>
            <th style={{ border: "1px solid" }}>pricePerDay</th>
            <th style={{ border: "1px solid" }}>topSpeed</th>
            <th style={{ border: "1px solid" }}>zeroToSixty</th>
          </tr>
        </thead>
        <tbody>
          <CollectionRow />
        </tbody>
      </table>
    </div>
  );
};
