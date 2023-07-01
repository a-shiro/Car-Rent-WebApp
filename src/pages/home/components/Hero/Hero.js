import { Link } from "react-router-dom";
import heroImage from "../../../../assets/images/hero.jpg";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="section-hero">
      <div className="container-hero">
        <div className="title-container-hero">
          <h1>​ELEVATE YOUR JOURNEY WITH LUXURY CAR RENTALS</h1>
          <p>
            Indulge in the finest automotive luxury with our premium car rental
            services. Choose from an exquisite fleet of high-end vehicles and
            experience the unmatched comfort, performance, and style that define
            true sophistication.
          </p>
          <div className="cta-container-hero">
            <Link to="/cars">Discover</Link>
            <Link to="/about">About</Link>
          </div>
        </div>

        <img className="image-hero" src={heroImage} />
      </div>
    </section>
  );
};

export default Hero;
