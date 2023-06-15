import { useState, useEffect } from "react";
import { getData } from "../../services/queries";
import "./Admin.css";

const Admin = () => {
  const [collectionList, setCollectionList] = useState(null);
  const [tableHeads, setTableHeads] = useState(null);
  const [activeCollection, setActiveCollection] = useState("cars");

  useEffect(() => {
    const queryData = async () => {
      // ToDo: Dynamically change queries

      const thData = await getData("tableHeads");
      const collectionData = await getData(activeCollection);

      setTableHeads(thData[0]);

      console.log(collectionData);

      setCollectionList(collectionData);
    };

    queryData();
  }, []);

  return (
    <main>
      <table className="table-admin">
        <thead>
          {tableHeads &&
            tableHeads[activeCollection].map((x) => (
              <tr>
                <th>{x}</th>
              </tr>
            ))}
        </thead>
        <tbody>
          {collectionList &&
            collectionList.map((x) => (
              <tr>
                {Object.entries(x).map((y) => (
                  <td>{y[1]}</td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </main>
  );
};

export default Admin;
