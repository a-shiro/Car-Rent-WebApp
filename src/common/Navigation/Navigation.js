import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

export const Nav = () => {
  const [navListElement, setNavListElement] = useState(null);

  useEffect(() => {
    setNavListElement(document.getElementsByClassName("navbar-list")[0]);
  }, []);

  const toggleHandler = () => {
    navListElement.classList.toggle("active");
  };

  return (
    <nav className="navbar">
      <div className="brand-title">RentX</div>
      <a href="#" className="toggle-button" onClick={toggleHandler}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </a>
      <div className="links-container">
        <ul className="navbar-list">
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
    </nav>
  );
};
