import { useEffect, useState } from "react";
import { postData } from "../../../services/queries";
import { storage } from "../../../setup/config/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export const Modal = ({ data, activeCollection }) => {
  const [formFields, setFormFields] = useState(null);
  const [fieldValues, setFieldValues] = useState(null);
  const [singleImageData, setSingleImageData] = useState(null);
  const [multipleImages, setMultipleImages] = useState([]);
  const [doneUploading, setDoneUploading] = useState(false);

  useEffect(() => {
    const createFormSchema = (data) => {
      const schema = {};

      Object.entries(data[0]).map(([key, value]) => {
        if (key === "id") {
          return;
        }

        const fieldName = key;
        let fieldType = typeof value;

        if (fieldName === "photos" || fieldName === "thumbnail") {
          fieldType = "file";
        }
        schema[fieldName] = fieldType;
      });

      setFormFields(schema);
    };

    if (data !== null && data.length > 0) {
      createFormSchema(data);
    }

    // WRITE A CLEAN CODE

    if (doneUploading && fieldValues[singleImageData.fieldName] !== "") {
      console.log("posting here");

      postData(activeCollection, fieldValues);
    }
  }, [data, doneUploading, fieldValues]);

  const onValueChange = (e) => {
    let newValue = e.target.value;

    if (e.target.placeholder === "photos") {
      setMultipleImages(Array.from(e.target.files));
      newValue = [];
    } else if (e.target.type === "file") {
      setSingleImageData({
        fieldName: e.target.placeholder,
        file: e.target.files[0],
      });
      newValue = "";
    }

    if (e.target.type === "number") {
      newValue = Number(newValue);
    }

    setFieldValues(() => ({
      ...fieldValues,
      [e.target.placeholder]: newValue,
    }));
  };

  const createFields = (key) => {
    let multipleFiles = false;
    let isTextArea = false;

    switch (key) {
      case "photos":
        multipleFiles = true;
        break;

      case "description":
      case "countries":
        isTextArea = true;
        break;
    }

    return isTextArea ? (
      <textarea
        onChange={onValueChange}
        placeholder={key}
        required
        key={key}
      ></textarea>
    ) : (
      <input
        onChange={onValueChange}
        placeholder={key}
        type={formFields[key]}
        multiple={multipleFiles}
        required
        key={key}
      />
    );
  };

  const closeModal = () => {
    document.getElementById("modal").classList.toggle("visible-admin");
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const uploadImage = async () => {
      if (singleImageData !== null) {
        const file = singleImageData.file;
        const fieldName = singleImageData.fieldName;
        const filePath = `${fieldName}/${file.name}`;
        const storageRef = ref(storage, filePath);

        await uploadBytes(storageRef, file);
        const fileUrl = await getDownloadURL(storageRef);

        setFieldValues(() => ({
          ...fieldValues,
          [fieldName]: fileUrl,
        }));
      }

      if (multipleImages.length > 0) {
        multipleImages.map(async (file) => {
          const filePath = `cars/${fieldValues.model.toLowerCase()}/${
            file.name
          }`;

          const storageRef = ref(storage, filePath);

          await uploadBytes(storageRef, file);

          const fileUrl = await getDownloadURL(storageRef);

          fieldValues.photos.push(fileUrl);

          if (multipleImages.length === fieldValues.photos.length) {
            setDoneUploading(true);
          }
        });
      }
    };

    uploadImage();
  };

  return (
    <div id="modal" className="modal-admin">
      <div className="form-wrapper-admin">
        <button onClick={closeModal} className="close-modal-admin">
          X
        </button>
        <h1>Add</h1>
        {formFields && (
          <form onSubmit={submitHandler} className="form-admin">
            {Object.keys(formFields).map(createFields)}
            <button className="form-submit-admin">Submit</button>
          </form>
        )}
      </div>
    </div>
  );
};
