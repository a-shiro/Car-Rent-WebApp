import { CarPreview } from "./components/CarPreview";

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
      <CarPreview />
    </div>
  );
};
