import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { database } from "../../../setup/config/firebase";

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

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(database, "cars"), {
        brand: formData.carBrand.value,
        model: formData.carModel.value,
        type: formData.carType.value,
        engine: formData.carEngine.value,
        horsePower: formData.carHorsePower.value,
        imgUrl: formData.carImgUrl.value,
        pricePerDay: formData.carPricePerDay.value,
        topSpeed: formData.carTopSpeed.value,
        zeroToSixty: formData.carZeroToSixty.value,
      });
    } catch (err) {
      console.error(err);
    }
  };

  const onChangeHandler = (e) => {
    const data = formData[e.target.name];
    const key = e.target.name;
    const value =
      e.target.type === "text" ? e.target.value : Number(e.target.value);

    setFormData(() => ({
      ...formData,
      [key]: { ...data, value },
    }));
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        {Object.keys(formData).map((key) => (
          <input
            name={formData[key].name}
            value={formData[key].value}
            onChange={onChangeHandler}
            placeholder={formData[key].placeholder}
            type={formData[key].type}
            required
            key={key}
          />
        ))}

        <button>Add</button>
      </form>
    </div>
  );
};
