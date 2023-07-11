export const Dropdown = ({ activeCollection, setActiveCollection }) => {
  const visibilityHandler = (e) => {
    const id = e.target.getAttribute("data-target");
    document.querySelector(`#${id}`).classList.toggle("visible-admin");
  };

  const onChangeHandler = (e) => {
    const collection = e.target.textContent.toLowerCase();
    document.querySelector(".dropdown-admin").classList.remove("visible-admin");

    setActiveCollection(collection);
  };

  return (
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
      {/*  Change list items to be dynamic \/ */}
      <ul id="dropdown" className="dropdown-admin">
        <li onClick={onChangeHandler}>cars</li>
        <li onClick={onChangeHandler}>brands</li>
        <li onClick={onChangeHandler}>countries</li>
        <li onClick={onChangeHandler}>cities</li>
      </ul>
    </div>
  );
};
