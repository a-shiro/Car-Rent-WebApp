export const Table = ({
  activeCollection,
  setActiveCollection,
  tableHeads,
  tableData,
  collectionOptions,
}) => {
  const visibilityHandler = (e) => {
    const id = e.target.getAttribute("data-target");
    document.querySelector(`#${id}`).classList.toggle("visible-admin");
  };

  const changeCollectionHandler = (e) => {
    setActiveCollection(e.target.textContent);
    document.querySelector(".dropdown-admin").classList.remove("visible-admin");
  };

  return (
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
          {tableData &&
            tableData.map((arr) => (
              <tr key={tableData.indexOf(arr)}>
                {arr.map((x) => (
                  <td key={arr.indexOf(x) + arr[arr.length - 1]}>{x}</td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>

      <div className="dropdown-wrapper-admin">
        <div>
          <button
            data-target="dropdown"
            className="dropdown-toggle-admin"
            onClick={visibilityHandler}
          >
            {activeCollection}
          </button>

          <button
            data-target="modal"
            className="add-button-admin"
            onClick={visibilityHandler}
          >
            Add
          </button>
        </div>

        {collectionOptions && (
          <ul id="dropdown" className="dropdown-admin">
            {collectionOptions.map((collection) => (
              <li onClick={changeCollectionHandler} key={collection}>
                {collection}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};
