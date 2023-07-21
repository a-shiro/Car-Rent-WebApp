import { Link } from "react-router-dom";
import "./Locations.css";

export const Card = ({ data }) => {
  return (
    <Link to={`cars/?location=${data.name}`} className="card-locations">
      <span>{data.name}</span>
      <img src={data.thumbnail} alt={`${data.name}-image`} />
    </Link>
  );
};
