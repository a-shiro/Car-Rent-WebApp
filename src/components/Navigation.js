import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className="navigation">
      <img
        src="https://hips.hearstapps.com/hmg-prod/images/2019-honda-civic-sedan-1558453497.jpg?resize=480:*"
        height="100px"
        width="150px"
      />
      <div style={{ display: "inline-block" }}>
        <Link to="/">Home</Link>
        <a>Cars</a>
        <Link to="/about">About</Link>
        <a>Contacts</a>
      </div>
    </nav>
  );
};
