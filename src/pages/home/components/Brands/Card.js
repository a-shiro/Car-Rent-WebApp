import "./Brands.css";

export const Card = ({ data }) => {
  return (
    <div className="card-brands">
      <img src={data.logo} alt={`${data.name}-logo`} />
    </div>
  );
};
