import { Link } from "react-router-dom";

export const CarList = () => {
  return (
    <div
      className="car-list"
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        flex: "1",
      }}
    >
      <Link to="/whatever-car-and-model">
        <img src="https://www.topgear.com/sites/default/files/2021/12/topgear_-_shelby_gt500-_002.jpg?w=424&h=239" />
      </Link>
      <Link to="/whatever-car-and-model">
        <img src="https://www.topgear.com/sites/default/files/2021/12/topgear_-_shelby_gt500-_002.jpg?w=424&h=239" />
      </Link>
      <Link to="/whatever-car-and-model">
        <img src="https://www.topgear.com/sites/default/files/2021/12/topgear_-_shelby_gt500-_002.jpg?w=424&h=239" />
      </Link>
      <Link to="/whatever-car-and-model">
        <img src="https://www.topgear.com/sites/default/files/2021/12/topgear_-_shelby_gt500-_002.jpg?w=424&h=239" />
      </Link>
      <Link to="/whatever-car-and-model">
        <img src="https://www.topgear.com/sites/default/files/2021/12/topgear_-_shelby_gt500-_002.jpg?w=424&h=239" />
      </Link>
      <Link to="/whatever-car-and-model">
        <img src="https://www.topgear.com/sites/default/files/2021/12/topgear_-_shelby_gt500-_002.jpg?w=424&h=239" />
      </Link>
    </div>
  );
};
