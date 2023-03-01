import { Link } from "react-router-dom";

export const PageNotFound = () => {
  return (
    <div>
      <h1>Page not found</h1>
      <p>Sorry, the page you requested was not found.</p>
      <Link to="/">Back Home</Link>
      <button>Browse Cars</button>
    </div>
  );
};
