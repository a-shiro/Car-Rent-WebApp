import { useState, useContext } from "react";
import { postData } from "../../../services/queries";
import { CarsContext } from "../Administration";
import { getData } from "../../../services/queries";
import styles from "../Administration.module.css";

export const CreateForm = () => {
  const [formData, setFormData] = useState({
    carBrand: {
      value: "",
      name: "carBrand",
      placeholder: "Brand",
      type: "text",
    },
    carModel: {
      value: "",
      name: "carModel",
      placeholder: "Model",
      type: "text",
    },
    carType: {
      value: "",
      name: "carType",
      placeholder: "Type",
      type: "text",
    },
    carEngine: {
      value: "",
      name: "carEngine",
      placeholder: "Engine",
      type: "text",
    },
    carImgUrl: {
      value: "",
      name: "carImgUrl",
      placeholder: "Image URL",
      type: "text",
    },
    carHorsePower: {
      value: "",
      name: "carHorsePower",
      placeholder: "Horse power",
      type: "number",
    },
    carPricePerDay: {
      value: "",
      name: "carPricePerDay",
      placeholder: "Price per day",
      type: "number",
    },
    carTopSpeed: {
      value: "",
      name: "carTopSpeed",
      placeholder: "Top speed",
      type: "number",
    },
    carZeroToSixty: {
      value: "",
      name: "carZeroToSixty",
      placeholder: "Zero to Sixty",
      type: "number",
    },
  });

  const [carDetailsPath, setCarDetailsPath] = useState("");
  const [carList, setCarList] = useContext(CarsContext);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    postData("cars", {
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

    formData.carBrand.value = "";
    formData.carModel.value = "";
    formData.carType.value = "";
    formData.carEngine.value = "";
    formData.carHorsePower.value = "";
    formData.carImgUrl.value = "";
    formData.carPricePerDay.value = "";
    formData.carTopSpeed.value = "";
    formData.carZeroToSixty.value = "";
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
      <h1 className={styles.FormHeading}>Add item</h1>
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

        <button className={styles.AddButton}>Add</button>
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
