import { Link } from "react-router-dom";
import heroImage from "../../../../assets/images/hero.jpg";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-title-container">
          <h1 className="hero-title">
            ​ELEVATE YOUR JOURNEY WITH LUXURY CAR RENTALS
          </h1>
          <p className="hero-subtitle">
            Indulge in the finest automotive luxury with our premium car rental
            services. Choose from an exquisite fleet of high-end vehicles and
            experience the unmatched comfort, performance, and style that define
            true sophistication.
          </p>
          <div className="cta-container">
            <Link to="/cars" className="cta-button">
              Discover
            </Link>
            <Link to="/about" className="cta-button">
              About
            </Link>
          </div>
        </div>

        <img className="hero-image" src={heroImage} />
      </div>
    </section>
  );
};

export default Hero;
