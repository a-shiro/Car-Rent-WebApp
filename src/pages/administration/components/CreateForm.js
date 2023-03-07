import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { database } from "../../../setup/config/firebase";

export const CreateForm = () => {
  const [formValues, setFormValues] = useState({
    carBrand: {
      value: "",
      name: "carBrand",
      placeholder: "Brand",
      type: "string",
    },
    carModel: {
      value: "",
      name: "carModel",
      placeholder: "Model",
      type: "string",
    },
    carType: {
      value: "",
      name: "carType",
      placeholder: "Type",
      type: "string",
    },
    carEngine: {
      value: "",
      name: "carEngine",
      placeholder: "Engine",
      type: "string",
    },
    carImgUrl: {
      value: "",
      name: "carImgUrl",
      placeholder: "Image URL",
      type: "string",
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

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(database, "cars"), {
        brand: formValues.carBrand.value,
        model: formValues.carModel.value,
        type: formValues.carType.value,
        engine: formValues.carEngine.value,
        horsePower: formValues.carHorsePower.value,
        imgUrl: formValues.carImgUrl.value,
        pricePerDay: formValues.carPricePerDay.value,
        topSpeed: formValues.carTopSpeed.value,
        zeroToSixty: formValues.carZeroToSixty.value,
      });
    } catch (err) {
      console.error(err);
    }
  };

  const onChangeHandler = (e) => {
    const keyName = e.target.name;
    const fieldObject = formValues[e.target.name];

    setFormValues(() => ({
      ...formValues,
      [keyName]: { ...fieldObject, value: e.target.value },
    }));
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        {Object.keys(formValues).map((key) => (
          <input
            name={formValues[key].name}
            value={formValues[key].value}
            onChange={onChangeHandler}
            placeholder={formValues[key].placeholder}
            type={formValues[key].type}
            required
            key={key}
          />
        ))}

        <button>Add</button>
      </form>
    </div>
  );
};
