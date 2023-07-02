import "./About.css";
import aboutImage from "../.././../../assets/images/about.jpg";

const About = () => {
  return (
    <section className="section-about">
      <div className="container-about">
        <div>
          <h1>About us --</h1>
          <p>
            At <span>RentX</span>, we believe that a remarkable journey begins
            with an extraordinary vehicle, and we take pride in curating a fleet
            of the most exclusive and coveted automobiles in the world.
          </p>
          <p>
            With a deep passion for automotive excellence, our team at{" "}
            <span>RentX</span> strives to deliver an unforgettable experience to
            every customer. We understand that driving is not merely a means of
            transportation; it is an expression of individuality and a
            reflection of personal success. Whether you require a vehicle for a
            special occasion, a business trip, or simply to indulge in a moment
            of pure indulgence, we have the perfect luxury car waiting for you.
          </p>
          <p>
            Our fleet comprises a carefully selected collection of the most
            iconic and coveted automobiles, including prestigious brands like{" "}
            <span>
              Rolls-Royce, Bentley, Lamborghini, Ferrari, Aston Martin
            </span>
            , and many more. Each vehicle is meticulously maintained to ensure
            optimum performance and immaculate presentation, guaranteeing a
            seamless and exhilarating driving experience.
          </p>
          <p>
            Indulge your passion for luxury and elevate your driving experience
            with <span>RentX</span>. Discover the pleasure of commanding the
            finest automobiles ever created and unlock a world of unforgettable
            memories. Welcome to the epitome of automotive luxury. Welcome to{" "}
            <span>RentX</span>.
          </p>

          <p>
            Feel free to give us a <a href="#">call</a> at any time or come to a
            RentX <a href="#">location</a> of your choice. Our call center
            and/or locations support 5 languages (EN - DE - ES - IT - RU) and we
            can advise you on the car that suits you best.
          </p>
        </div>

        <img src={aboutImage} alt="about-image" />
      </div>

      <span className="background-text">RentX</span>
      <span className="background-text-2">RentX</span>
    </section>
  );
};

export default About;
