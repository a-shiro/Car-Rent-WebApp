import React, { useState, useEffect } from "react";
import { getData } from "../../services/queries";
import { Table } from "./components/Table";
import { TableActions } from "./components/TableActions";
import "./Admin.css";

const Admin = () => {
  const [activeCollection, setActiveCollection] = useState("cars");
  const [tableData, setTableData] = useState(null);
  const [tableHeads, setTableHeads] = useState(null);
  const [dropdownOptions, setDropdownOptions] = useState(null);

  useEffect(() => {
    const prepareTable = async () => {
      const [collectionData, tableHeadsData, optionsData] = await queryData();
      const sortedTableData = sortData(tableHeadsData, collectionData);

      setDropdownOptions(optionsData);
      setTableHeads(tableHeadsData);
      setTableData(sortedTableData);
    };

    prepareTable();
  }, [activeCollection]);

  const queryData = async () => {
    const collectionData = await getData(activeCollection);
    let tableHeadsData = await getData("tableHeads");
    let optionsData = tableHeadsData[0];

    tableHeadsData = tableHeadsData[0][activeCollection];

    delete optionsData.id;
    optionsData = Object.keys(optionsData);

    return [collectionData, tableHeadsData, optionsData];
  };

  const sortData = (tableHeadsData, collectionData) => {
    const sortedRows = [];

    for (const obj of collectionData) {
      const tableRow = [];

      for (const index in Object.entries(obj)) {
        const key = camelize(tableHeadsData[index]);
        tableRow.push(obj[key]);
      }

      tableRow.push(<TableActions />);
      sortedRows.push(tableRow);
    }

    return sortedRows;
  };

  const camelize = (str) => {
    return str
      .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
      })
      .replace(/\s+/g, "");
  };

  return (
    <main>
      <Table
        activeCollection={activeCollection}
        setActiveCollection={setActiveCollection}
        tableHeads={tableHeads}
        tableData={tableData}
        dropdownOptions={dropdownOptions}
      />

      <div id="modal" className="modal-admin">
        <div className="modal-form-admin">
          <h1>Add</h1>
        </div>
      </div>
    </main>
  );
};

export default Admin;
