import { Link } from "react-router-dom";

export const Featured = () => {
  return (
    <section id="featured">
      <h1>Welcome at RentX</h1>
      <p>Finest cars all around the globe</p>
      <div>
        <Link to="/about">Read more</Link>
        <Link to="/cars">Browse cars</Link>
        <img
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
          src="https://hips.hearstapps.com/hmg-prod/images/2019-honda-civic-sedan-1558453497.jpg?resize=480:*"
          alt=""
        />
      </div>
    </section>
  );
};
