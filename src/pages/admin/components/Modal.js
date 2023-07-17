import { useEffect, useState } from "react";
import { postData } from "../../../services/queries";
import { storage } from "../../../setup/config/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export const Modal = ({ data, activeCollection }) => {
  const [formFields, setFormFields] = useState(null);
  const [fieldValues, setFieldValues] = useState(null);

  const [singleFile, setSingleFile] = useState(null);
  const [multipleFiles, setMultipleFiles] = useState(null);

  const [multipleFilesUploaded, setMultipleFilesUploaded] = useState(false);
  const [singleFileUploaded, setSingleFileUploaded] = useState(false);

  useEffect(() => {
    const createFormSchema = (data) => {
      const schema = {};

      Object.entries(data[0]).map(([key, value]) => {
        if (key === "id") return;

        const fieldName = key;
        let fieldType = typeof value;

        switch (fieldName) {
          case "photos":
          case "thumbnail":
          case "logo":
            fieldType = "file";
            break;
        }

        schema[fieldName] = fieldType;
      });

      setFormFields(schema);
    };

    if (data !== null && data.length > 0) {
      createFormSchema(data);
    }

    if (multipleFiles !== null && multipleFilesUploaded && singleFileUploaded) {
      postData(activeCollection, fieldValues);

      setSingleFile(null);
      setSingleFileUploaded(false);
      setMultipleFiles(null);
      setMultipleFilesUploaded(false);
    } else if (multipleFiles === null && singleFileUploaded) {
      postData(activeCollection, fieldValues);

      setSingleFile(null);
      setSingleFileUploaded(false);
    }
  }, [data, multipleFilesUploaded, singleFileUploaded]);

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

  const onValueChange = (e) => {
    let newValue = e.target.value;

    if (e.target.placeholder === "photos") {
      setMultipleFiles({ photos: Array.from(e.target.files) });
      newValue = [];
    } else if (e.target.type === "file") {
      setSingleFile({
        fieldName: e.target.placeholder,
        file: e.target.files[0],
      });
      newValue = "";
    } else if (e.target.type === "number") {
      newValue = Number(newValue);
    }

    setFieldValues(() => ({
      ...fieldValues,
      [e.target.placeholder]: newValue,
    }));
  };

  const closeModal = () => {
    document.getElementById("modal").classList.toggle("visible-admin");
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const filePath = `${singleFile.fieldName}/${singleFile.file}`;
    const storageRef = ref(storage, filePath);

    await uploadBytes(storageRef, singleFile.file);
    const fileUrl = await getDownloadURL(storageRef);

    setFieldValues((prevState) => ({
      ...prevState,
      [singleFile.fieldName]: fileUrl,
    }));

    if (typeof fileUrl === "string") {
      setSingleFileUploaded(true);
    }

    multipleFiles?.photos.map(async (file) => {
      const relativePath = fieldValues.model.split(" ").join("-").toLowerCase();

      const filePath = `cars/${relativePath}/${file.name}`;
      const storageRef = ref(storage, filePath);

      await uploadBytes(storageRef, file);
      const fileUrl = await getDownloadURL(storageRef);

      fieldValues.photos.push(fileUrl);

      if (multipleFiles.photos.length === fieldValues.photos.length) {
        setMultipleFilesUploaded(true);
      }
    });

    closeModal();
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
