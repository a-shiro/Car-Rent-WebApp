import React, { useState, useEffect } from "react";
import { getData } from "../../services/queries";
import { Table } from "./components/Table";
import { AddModal } from "./components/AddModal";
import { AccessModal } from "./components/AccessModal";
import { Dropdown } from "./components/Dropdown";
import "./Admin.css";

const Admin = () => {
  const [activeCollection, setActiveCollection] = useState("cars");
  const [tableData, setTableData] = useState(null);
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

  return (
    <main>
      {!accessGranted ? (
        <AccessModal setAcessGranted={setAcessGranted} />
      ) : (
        <section className="table-section-admin">
          <div className="table-title-wrapper-admin">
            <h1>
              Active collection: <span>{activeCollection}</span>
            </h1>
          </div>

          <Table data={tableData} activeCollection={activeCollection} />
          <AddModal data={tableData} activeCollection={activeCollection} />
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
