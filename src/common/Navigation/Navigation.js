import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Nav = () => {
  const [hamburgerMenu, setHamburgerMenu] = useState(null);

  useEffect(() => {
    setHamburgerMenu(document.getElementById("links-list"));
  }, []);

  const toggleHamburger = () => {
    const menuVisibility = hamburgerMenu.style.display;

    menuVisibility === "none" || menuVisibility === ""
      ? (hamburgerMenu.style.display = "flex")
      : (hamburgerMenu.style.display = "none");

    document.querySelector(".navbar").classList.toggle("border-bottom");
  };

  return (
    <nav className="navbar">
      <Link to="/" className="brand-logo">
        RentX
      </Link>

      <ul id="links-list">
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

      <a href="#" className="hamburger-menu" onClick={toggleHamburger}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </a>
    </nav>
  );
};

export default Nav;
