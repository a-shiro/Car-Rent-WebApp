import { Link } from "react-router-dom";
import "./404.css";
import carVector from "../../assets/images/car-vector.png";

const PageNotFound = () => {
  return (
    <main>
      <div className="wrapper-404">
        <header className="title-wrapper-404">
          <h1>404</h1>
          <p>Sorry, but the page you requested was not found.</p>
        </header>

        <div className="button-wrapper-404">
          <Link to="/">Back Home</Link>
          <Link to="/cars">Browse Cars</Link>
        </div>

        <div>
          <img className="vector-image-404" src={carVector} alt="car-vector" />
        </div>
      </div>
    </main>
  );
};

export default PageNotFound;
