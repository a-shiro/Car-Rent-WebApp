import { useState, useEffect } from "react";
import { getData } from "../../services/queries";
import "./Admin.css";

const Admin = () => {
  const [collectionList, setCollectionList] = useState(null);
  const [tableHeads, setTableHeads] = useState(null);
  const [activeCollection, setActiveCollection] = useState("cars");

  const camelize = (str) => {
    return str
      .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
      })
      .replace(/\s+/g, "");
  };

  const sortData = (headsData, collectionData) => {
    const sortedData = [];

    for (const obj of collectionData) {
      const newArr = [];

      for (const index in Object.entries(obj)) {
        const key = camelize(headsData[index]);
        newArr.push(obj[key]);
      }

      sortedData.push(newArr);
    }

    return sortedData;
  };

  useEffect(() => {
    const queryData = async () => {
      const collectionData = await getData(activeCollection);
      let thData = await getData("tableHeads");
      thData = thData[0][activeCollection];
      console.log(thData);

      const sortedData = sortData(thData, collectionData);

      setTableHeads(thData);
      setCollectionList(sortedData);
    };

    queryData();
  }, []);

  return (
    <main>
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
    </main>
  );
};

export default Admin;
