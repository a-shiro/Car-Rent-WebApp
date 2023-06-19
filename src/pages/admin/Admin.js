import React, { useState, useEffect, createElement } from "react";
import { getData } from "../../services/queries";
import "./Admin.css";

const Admin = () => {
  const [collectionList, setCollectionList] = useState(null);
  const [tableHeads, setTableHeads] = useState(null);
  const [tableCollections, setTableCollections] = useState(null);
  const [activeCollection, setActiveCollection] = useState("cars");

  const toggleDropdown = () => {
    document.querySelector(".dropdown-admin").classList.toggle("visible-admin");
  };

  const changeCollection = (e) => {
    setActiveCollection(e.target.textContent);
    document.querySelector(".dropdown-admin").classList.remove("visible-admin");
  };

  const camelize = (str) => {
    return str
      .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
      })
      .replace(/\s+/g, "");
  };

  const addButtons = (data) => {
    const actionsWrapper = createElement(
      "div",
      {
        className: "actions-wrapper-admin",
      },
      createElement(
        "button",
        {
          className: "action-button-admin",
          onClick: () => {
            console.log("delete");
          },
          id: data[data.length - 1],
        },
        "Delete"
      ),
      createElement(
        "button",
        {
          className: "action-button-admin",
          onClick: () => {
            console.log("edit");
          },
          id: data[data.length - 1],
        },
        "Edit"
      )
    );

    data.push(actionsWrapper);
  };

  const sortData = (headsData, collectionData) => {
    const sortedData = [];

    for (const obj of collectionData) {
      const newArr = [];

      for (const index in Object.entries(obj)) {
        const key = camelize(headsData[index]);
        newArr.push(obj[key]);
      }

      addButtons(newArr);

      sortedData.push(newArr);
    }

    return sortedData;
  };

  useEffect(() => {
    const queryData = async () => {
      const collectionData = await getData(activeCollection);
      let thData = await getData("tableHeads");

      const sortedData = sortData(thData[0][activeCollection], collectionData);

      const allCollections = Object.keys(thData[0]);
      allCollections.pop();

      setTableCollections(allCollections);
      setTableHeads(thData[0][activeCollection]);
      setCollectionList(sortedData);
    };

    queryData();
  }, [activeCollection]);

  // ToDo: Add change collection and reload content properly

  return (
    <main>
      <section className="table-section-admin">
        <div className="table-title-wrapper-admin">
          <h1>
            Active collection: <span>{activeCollection}</span>
          </h1>
        </div>

        <table className="table-admin">
          <thead>
            {tableHeads &&
              tableHeads.map((x) => (
                <tr key={tableHeads.indexOf(x)}>
                  <th>{x}</th>
                </tr>
              ))}
          </thead>
          <tbody>
            {collectionList &&
              collectionList.map((arr) => (
                <tr key={collectionList.indexOf(arr)}>
                  {arr.map((x) => (
                    <td key={arr.indexOf(x) + arr[arr.length - 1]}>{x}</td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>

        <div>
          <button className="dropdown-toggle-admin" onClick={toggleDropdown}>
            Collections
          </button>

          {tableCollections && (
            <ul className="dropdown-admin">
              {tableCollections.map((collection) => (
                <li onClick={changeCollection} key={collection}>
                  {collection}
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </main>
  );
};

export default Admin;
