import { useState, useContext, useEffect } from "react";
import { updateDataById } from "../../../services/queries";
import { CarsContext } from "../Administration";
import { getData } from "../../../services/queries";
import styles from "../Administration.module.css";

export const UpdateForm = ({ document, setUpdateVisible }) => {
  const [formData, setFormData] = useState({});

  const [carDetailsPath, setCarDetailsPath] = useState("");
  const [carList, setCarList] = useContext(CarsContext);

  useEffect(() => {
    setFormData({
      carBrand: {
        value: document.brand,
        name: "carBrand",
        placeholder: "Brand",
        type: "text",
      },
      carModel: {
        value: document.model,
        name: "carModel",
        placeholder: "Model",
        type: "text",
      },
      carType: {
        value: document.type,
        name: "carType",
        placeholder: "Type",
        type: "text",
      },
      carEngine: {
        value: document.engine,
        name: "carEngine",
        placeholder: "Engine",
        type: "text",
      },
      carImgUrl: {
        value: document.imgUrl,
        name: "carImgUrl",
        placeholder: "Image URL",
        type: "text",
      },
      carHorsePower: {
        value: document.horsePower,
        name: "carHorsePower",
        placeholder: "Horse power",
        type: "number",
      },
      carPricePerDay: {
        value: document.pricePerDay,
        name: "carPricePerDay",
        placeholder: "Price per day",
        type: "number",
      },
      carTopSpeed: {
        value: document.topSpeed,
        name: "carTopSpeed",
        placeholder: "Top speed",
        type: "number",
      },
      carZeroToSixty: {
        value: document.zeroToSixty,
        name: "carZeroToSixty",
        placeholder: "Zero to Sixty",
        type: "number",
      },
    });
  }, [document]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    updateDataById("cars", document.id, {
      brand: formData.carBrand.value,
      model: formData.carModel.value,
      type: formData.carType.value,
      engine: formData.carEngine.value,
      horsePower: formData.carHorsePower.value,
      imgUrl: formData.carImgUrl.value,
      pricePerDay: formData.carPricePerDay.value,
      topSpeed: formData.carTopSpeed.value,
      zeroToSixty: formData.carZeroToSixty.value,
      path: carDetailsPath,
    });

    const data = await getData("cars");
    setCarList(data);
    setUpdateVisible(false);
  };

  const onChangeHandler = (e) => {
    const data = formData[e.target.name];
    const key = e.target.name;
    const value =
      e.target.type === "text" ? e.target.value : Number(e.target.value);

    const path = createCarDetailsPath(formData.carModel.value);
    setCarDetailsPath(path);

    setFormData(() => ({
      ...formData,
      [key]: { ...data, value },
    }));
  };

  return (
    <div className={styles.FormCard}>
      <h1 className={styles.FormHeading}>Update item</h1>
      <form className={styles.Form} onSubmit={onSubmitHandler}>
        {Object.keys(formData).map((key) => (
          <input
            className={styles.InputFields}
            name={formData[key].name}
            value={formData[key].value}
            onChange={onChangeHandler}
            placeholder={formData[key].placeholder}
            type={formData[key].type}
            required
            key={key}
          />
        ))}

        <button className={styles.AddButton}>Update</button>
      </form>
    </div>
  );
};

function createCarDetailsPath(model) {
  return model
    .split(" ")
    .map((el) => el.toLowerCase())
    .join("-");
}
