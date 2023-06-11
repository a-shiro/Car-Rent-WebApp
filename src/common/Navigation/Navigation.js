import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Nav = () => {
  const [navListElement, setNavListElement] = useState(null);

  useEffect(() => {
    setNavListElement(document.getElementsByClassName("links-list")[0]);
  }, []);

  const toggleHandler = () => {
    navListElement.classList.toggle("small-active");
  };

  return (
    <nav className="navbar">
      <div>
        <Link to="/" className="brand-logo">
          RentX
        </Link>
      </div>

      <div className="links-list-container">
        <ul className="links-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cars">Cars</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contacts">Contact</Link>
          </li>
        </ul>
      </div>

      <a href="#" className="toggle-button" onClick={toggleHandler}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </a>
    </nav>
  );
};

export default Nav;
