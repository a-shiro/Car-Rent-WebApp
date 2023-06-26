import React, { useState, useEffect } from "react";
import { getData } from "../../services/queries";
import { Table } from "./components/Table";
import { TableActions } from "./components/TableActions";
import { Modal } from "./components/Modal";
import { camelize } from "./utils/camelize";
import "./Admin.css";

const Admin = () => {
  const [activeCollection, setActiveCollection] = useState("cars");
  const [tableData, setTableData] = useState(null);
  const [tableHeads, setTableHeads] = useState(null);
  const [collectionOptions, setCollectionOptions] = useState(null);

  useEffect(() => {
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

    const queryData = async () => {
      const collectionData = await getData(activeCollection);
      let tableHeadsData = await getData("tableHeads");
      let optionsData = tableHeadsData[0];

      tableHeadsData = tableHeadsData[0][activeCollection];

      delete optionsData.id;
      optionsData = Object.keys(optionsData);

      return [collectionData, tableHeadsData, optionsData];
    };

    const prepareTable = async () => {
      const [collectionData, tableHeadsData, optionsData] = await queryData();
      const sortedTableData = sortData(tableHeadsData, collectionData);

      setCollectionOptions(optionsData);
      setTableHeads(tableHeadsData);
      setTableData(sortedTableData);
    };

    prepareTable();
  }, [activeCollection]);

  return (
    <main>
      <Table
        activeCollection={activeCollection}
        setActiveCollection={setActiveCollection}
        tableHeads={tableHeads}
        tableData={tableData}
        collectionOptions={collectionOptions}
      />

      <Modal tableHeads={tableHeads} tableData={tableData} />
    </main>
  );
};

export default Admin;
