import React, { useState, useEffect } from "react";
import { getData } from "../../services/queries";
import { Table } from "./components/Table";
import { Modal } from "./components/Modal";
import { Dropdown } from "./components/Dropdown";
import { validCodes } from "./codes.js";
import "./Admin.css";

const Admin = () => {
  const [activeCollection, setActiveCollection] = useState("cars");
  const [tableData, setTableData] = useState(null);
  const [userInput, setUserInput] = useState("");
  const [accessGranted, setAcessGranted] = useState(false);

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
  }, [activeCollection, accessGranted]);

  const grantAccess = (e) => {
    e.preventDefault();

    if (validCodes.includes(userInput)) {
      setAcessGranted(true);
    }
  };

  return (
    <main>
      {!accessGranted ? (
        <div>
          <h1>admin signup</h1>
          <form onSubmit={grantAccess}>
            <input
              onChange={(e) => {
                setUserInput(e.target.value);
              }}
              value={userInput}
              placeholder="code"
            />
            <button>Sign in</button>
          </form>
        </div>
      ) : (
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
      )}
    </main>
  );
};

export default Admin;
