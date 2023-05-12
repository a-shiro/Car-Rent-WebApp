import "./Locations.css";

export const Card = ({ data }) => {
  return (
    <div className="location-card">
      <span>{data.name}</span>
      <img src={data.imgUrl} alt={`${data.name}-image`} />
    </div>
  );
};
