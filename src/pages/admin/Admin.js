import React, { useState, useEffect } from "react";
import { getData } from "../../services/queries";
import { Table } from "./components/Table";
import { TableActions } from "./components/TableActions";
import { Modal } from "./components/Modal";
import { storage } from "../../setup/config/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { Dropdown } from "./components/Dropdown";
import "./Admin.css";

const Admin = () => {
  const [activeCollection, setActiveCollection] = useState("cars");
  const [tableData, setTableData] = useState(null);

  const sortData = (obj) =>
    Object.keys(obj)
      .sort()
      .reduce((res, key) => ((res[key] = obj[key]), res), {});

  useEffect(() => {
    const queryData = async () => {
      let data = await getData(activeCollection);

      if (data) {
        data = data.map(sortData);

        setTableData(data);
      }
    };

    queryData();
  }, [activeCollection]);

  return (
    <main>
      <section className="table-section-admin">
        <div className="table-title-wrapper-admin">
          <h1>
            Active collection: <span>{activeCollection}</span>
          </h1>
        </div>

        <Table data={tableData} activeCollection={activeCollection} />

        <Modal data={tableData} activeCollection={activeCollection} />

        <Dropdown
          activeCollection={activeCollection}
          setActiveCollection={setActiveCollection}
        />
      </section>
    </main>
  );

  // const [image, setImage] = useState(null);
  // const [url, setUrl] = useState(null);
  // const [model, setModel] = useState("gt3");

  // const handleChange = (e) => {
  //   if (e.target.files[0]) {
  //     setImage(e.target.files[0]);
  //   }
  // };

  // const addData = (e) => {
  //   e.preventDefault();
  //   const storageRef = ref(storage, `cars/${model}/${image.name}`);
  //   const uploadTask = uploadBytesResumable(storageRef, image);

  //   uploadTask.on(
  //     "state_changed",
  //     (snapshot) => {
  //       const progress =
  //         (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //       console.log("Upload is " + progress + "% done");
  //       switch (snapshot.state) {
  //         case "paused":
  //           console.log("Upload is paused");
  //           break;
  //         case "running":
  //           console.log("Upload is running");
  //           break;
  //       }
  //     },
  //     (error) => {},
  //     () => {
  //       getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
  //         setUrl(downloadURL);
  //       });
  //     }
  //   );
  // };

  // return (
  //   <form onSubmit={addData}>
  //     <input type="file" onChange={handleChange}></input>
  //     <input type="submit" />
  //     <h1>{url}</h1>
  //     <img src={url} />
  //   </form>
  // <CarsCollectionForm />
  // );
};

export default Admin;
