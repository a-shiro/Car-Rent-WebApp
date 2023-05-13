import "./Brands.css";

export const Card = ({ data }) => {
  return (
    <div className="brand-card">
      <img src={data.imgUrl} alt={`${data.name}-logo`} />
    </div>
  );
};
