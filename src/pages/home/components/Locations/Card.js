import "./Locations.css";

export const Card = ({ data }) => {
  return (
    <div className="card-locations">
      <span>{data.name}</span>
      <img src={data.thumbnail} alt={`${data.name}-image`} />
    </div>
  );
};
