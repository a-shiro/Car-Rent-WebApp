import "./About.css";
import HeroCard from "./HeroCard";
import historyIcon from "../../assets/images/history.png";
import carsIcon from "../../assets/images/cars.png";
import locationIcon from "../../assets/images/location-pins.png";
import customerServiceIcon from "../../assets/images/customer-service.png";
import companyHistoryImage from "../../assets/images/company-history.jpg";
import carBrandsImage from "../../assets/images/car-brands.png";
import serviceImage from "../../assets/images/service.jpg";
import locationsImage from "../../assets/images/locations.jpg";
import { useRef } from "react";

const About = () => {
  const refHistory = useRef(null);
  const refBrands = useRef(null);
  const refService = useRef(null);
  const refLocation = useRef(null);

  return (
    <main>
      <section className="hero-section-about">
        <div className="hero-cards-wrapper-about">
          <HeroCard
            title="History"
            subtitle="Our rich and interesting history"
            sectionRef={refHistory}
            icon={historyIcon}
            iconLink="https://www.flaticon.com/free-icons/scroll"
            iconText=" Scroll icons created by Freepik - Flaticon"
          />
          <HeroCard
            title="Brands"
            subtitle="Only the finest examples"
            sectionRef={refBrands}
            icon={carsIcon}
            iconLink="https://www.flaticon.com/free-icons/car"
            iconText="Car icons created by Freepik - Flaticon"
          />
          <HeroCard
            title="Service"
            subtitle="24/7 available service"
            sectionRef={refService}
            icon={customerServiceIcon}
            iconLink="https://www.flaticon.com/free-icons/customer-service"
            iconText="Customer service icons created by Icon home - Flaticon"
          />
          <HeroCard
            title="Location"
            subtitle="We've got the globe covered"
            sectionRef={refLocation}
            icon={locationIcon}
            iconLink="https://www.flaticon.com/free-icons/location"
            iconText="Location icons created by Freepik - Flaticon"
          />
        </div>
      </section>

      <section className="info-section-about" ref={refHistory}>
        <div className="info-wrapper-about">
          <h1>RentX - Redefining luxury car rentals since 2010 --</h1>

          <div>
            <p>
              In 2010, <span>RentX</span> was born out of a shared passion for
              luxury automobiles and a vision to provide discerning individuals
              with an unparalleled driving experience. Founded by a team of
              automotive enthusiasts, we set out to revolutionize the way people
              perceive and indulge in luxury car rentals.
            </p>
            <p>
              From its humble beginnings, <span>RentX</span> quickly established
              itself as a premier destination for those seeking the epitome of
              automotive excellence. Our founders meticulously curated a fleet
              of the world's most prestigious and sought-after vehicles,
              ensuring that every customer could immerse themselves in the lap
              of luxury and sophistication.
            </p>
            <p>
              With a commitment to exceptional service and an unwavering
              dedication to exceeding expectations, the company swiftly gained
              recognition as a trusted name in the industry. By setting new
              standards for quality, reliability, and personalized attention, we
              earned the loyalty of clients who craved an extraordinary driving
              experience.
            </p>
            <p>
              Over the years, <span>RentX</span> has continuously expanded its
              fleet, adding the latest models from renowned manufacturers,
              pushing boundaries and staying ahead of the ever-evolving
              automotive landscape. Our team of experts scours the globe to
              source the most exclusive and desirable vehicles, guaranteeing
              that our customers always have access to the pinnacle of
              automotive engineering and design.
            </p>
            <p>
              As we forge ahead into the future, we remain steadfast in our
              commitment to innovation, anticipating and adapting to the
              ever-changing needs of our esteemed clientele. With our unwavering
              passion for luxury vehicles and a team of professionals dedicated
              to exceeding expectations, <span>RentX</span> continues to
              redefine the boundaries of luxury car rentals, ensuring that each
              drive is an extraordinary experience that lingers long after the
              journey ends.
            </p>
            <p>
              Welcome to <span>RentX</span>, where extraordinary moments on
              wheels become reality.
            </p>
          </div>
        </div>

        <img src={companyHistoryImage} alt="section-image" />
      </section>

      <section className="info-section-about" ref={refBrands}>
        <div className="info-wrapper-about">
          <h1>Brands --</h1>
          <div>
            <p>
              At <span>RentX</span>, we take pride in offering a meticulously
              curated collection of luxury cars from the world's most
              prestigious automotive brands. Each brand in our fleet represents
              the pinnacle of engineering, craftsmanship, and elegance, ensuring
              that your driving experience is nothing short of extraordinary.
            </p>

            <ul>
              <li>
                <span>Aston Martin:</span> With their unmistakable style and
                exhilarating performance, Aston Martin vehicles embody the
                essence of British luxury. Rent an Aston Martin to experience
                the perfect harmony of power, grace, and timeless design.
              </li>
              <li>
                <span>Bentley:</span> Renowned for their handcrafted interiors
                and exceptional comfort, Bentley cars provide an unparalleled
                level of opulence. From grand touring models to powerful sports
                cars, driving a Bentley is an experience reserved for those who
                appreciate the finest things in life.
              </li>
              <li>
                <span>Ferrari:</span> Embrace the passion and adrenaline of
                Italian automotive excellence with a Ferrari rental. These
                iconic sports cars combine breathtaking design, cutting-edge
                technology, and blistering performance, delivering an unmatched
                thrill on the road.
              </li>
              <li>
                <span>Lamborghini:</span> Rent a Lamborghini to unleash the raw
                power and striking aesthetics of these legendary supercars. With
                their distinct angular lines and roaring engines, Lamborghinis
                turn heads wherever they go, making a bold statement of
                unrivaled performance.
              </li>
              <li>
                <span>Mercedes-Benz:</span> A symbol of sophistication and
                innovation, Mercedes-Benz offers a diverse range of luxury
                vehicles catering to various tastes and needs. From luxurious
                sedans to powerful SUVs, Mercedes-Benz combines elegance with
                cutting-edge technology.
              </li>
              <li>
                <span>Porsche:</span> Experience the perfect balance between
                performance and comfort with a Porsche rental. These
                German-engineered sports cars offer precision handling,
                thrilling acceleration, and unmistakable style, making every
                drive an exhilarating adventure.
              </li>
              <li>
                <span>Rolls-Royce:</span> Renting a Rolls-Royce is the epitome
                of refined luxury. Known for their unparalleled craftsmanship,
                attention to detail, and iconic Spirit of Ecstasy hood ornament,
                Rolls-Royce cars deliver a regal and serene driving experience
                like no other.
              </li>
              <li>
                <span>Maserati:</span> Embodying Italian elegance and
                exhilaration, Maserati cars blend luxury and performance
                seamlessly. From seductive grand tourers to dynamic sports cars,
                Maserati captures the essence of Italian flair and driving
                pleasure.
              </li>
            </ul>
            <p>
              This is merely a part of our selection. When you choose{" "}
              <span>RentX</span>, you gain access to an extraordinary fleet of
              luxury cars from these esteemed brands. Our commitment to
              excellence ensures that each vehicle in our collection is
              meticulously maintained, thoroughly inspected, and ready to
              provide you with an unforgettable driving experience.
            </p>
          </div>
        </div>
        <img
          className="brands-image"
          src={carBrandsImage}
          alt="section-image"
        />
      </section>

      <section className="info-section-about" ref={refService}>
        <div className="info-wrapper-about">
          <h1>Service --</h1>
          <div>
            <p>
              At <span>RentX</span>, we understand that true luxury knows no
              bounds when it comes to time and convenience. That's why we offer
              our esteemed clientele a dedicated 24/7 service that ensures a
              seamless and extraordinary experience, no matter when or where you
              require our assistance.
            </p>

            <ul>
              <li>
                <span>Around-the-Clock Support:</span> Our team of knowledgeable
                and professional staff is available 24 hours a day, 7 days a
                week, ready to assist you with any inquiries, reservations, or
                concerns you may have. Whether you need assistance with choosing
                the perfect vehicle, modifying your booking, or seeking
                recommendations, our experts are just a phone call or email
                away.
              </li>
              <li>
                <span>Flexible Reservations:</span> With our 24/7 service, you
                have the freedom to make reservations at your convenience.
                Whether you're planning ahead or require a last-minute rental,
                our flexible reservation system allows you to secure the luxury
                car of your dreams whenever you need it, ensuring a stress-free
                and seamless experience.
              </li>
              <li>
                <span>On-Demand Delivery:</span> We understand that time is a
                precious commodity, and convenience is paramount. With our
                service, we offer on-demand delivery and pickup of your rental
                vehicle. Whether you prefer to have the car delivered to your
                doorstep, hotel, or any other location of your choosing, our
                dedicated team will ensure that your luxury car is delivered
                promptly and in immaculate condition.
              </li>
              <li>
                <span>Roadside Assistance:</span> Your safety and peace of mind
                are of utmost importance to us. In the unlikely event of any
                issues or emergencies during your rental, our 24/7 service
                includes comprehensive roadside assistance. Whether it's a flat
                tire, a battery jump-start, or any other unexpected situation,
                our support team will promptly assist you, ensuring that your
                journey continues uninterrupted.
              </li>
              <li>
                <span>Concierge Services:</span> <span>RentX</span> goes beyond
                just providing luxury cars; we strive to create exceptional
                experiences. Our services are available to assist you with
                various arrangements, including restaurant reservations, event
                tickets, and more. Let us take care of the finer details,
                allowing you to focus on enjoying your luxury driving experience
                to the fullest.
              </li>
              <li>
                <span>Global Reach:</span> Whether you're traveling locally or
                exploring a new destination, our 24/7 service extends worldwide.
                With our extensive network of affiliates and partners, we can
                arrange luxury car rentals in numerous cities and countries,
                ensuring that your unparalleled driving experience transcends
                borders.
              </li>
            </ul>
            <p>
              At <span>RentX</span>, our commitment to delivering excellence
              knows no time constraints. With our 24/7 service, we are dedicated
              to providing unparalleled support, convenience, and peace of mind
              throughout your entire rental journey. Experience luxury on your
              terms, anytime, anywhere.
            </p>
          </div>
        </div>
        <img className="brands-image" src={serviceImage} alt="section-image" />
      </section>

      <section className="info-section-about" ref={refLocation}>
        <div className="info-wrapper-about">
          <h1>Locations --</h1>
          <div>
            <p>
              At <span>RentX</span>, we understand that true luxury knows no
              bounds when it comes to time and convenience. That's why we offer
              our esteemed clientele a dedicated 24/7 service that ensures a
              seamless and extraordinary experience, no matter when or where you
              require our assistance.
            </p>

            <ul>
              <li>
                <span>Around-the-Clock Support:</span> Our team of knowledgeable
                and professional staff is available 24 hours a day, 7 days a
                week, ready to assist you with any inquiries, reservations, or
                concerns you may have. Whether you need assistance with choosing
                the perfect vehicle, modifying your booking, or seeking
                recommendations, our experts are just a phone call or email
                away.
              </li>
              <li>
                <span>Flexible Reservations:</span> With our 24/7 service, you
                have the freedom to make reservations at your convenience.
                Whether you're planning ahead or require a last-minute rental,
                our flexible reservation system allows you to secure the luxury
                car of your dreams whenever you need it, ensuring a stress-free
                and seamless experience.
              </li>
              <li>
                <span>On-Demand Delivery:</span> We understand that time is a
                precious commodity, and convenience is paramount. With our
                service, we offer on-demand delivery and pickup of your rental
                vehicle. Whether you prefer to have the car delivered to your
                doorstep, hotel, or any other location of your choosing, our
                dedicated team will ensure that your luxury car is delivered
                promptly and in immaculate condition.
              </li>
              <li>
                <span>Roadside Assistance:</span> Your safety and peace of mind
                are of utmost importance to us. In the unlikely event of any
                issues or emergencies during your rental, our 24/7 service
                includes comprehensive roadside assistance. Whether it's a flat
                tire, a battery jump-start, or any other unexpected situation,
                our support team will promptly assist you, ensuring that your
                journey continues uninterrupted.
              </li>
              <li>
                <span>Concierge Services:</span> <span>RentX</span> goes beyond
                just providing luxury cars; we strive to create exceptional
                experiences. Our services are available to assist you with
                various arrangements, including restaurant reservations, event
                tickets, and more. Let us take care of the finer details,
                allowing you to focus on enjoying your luxury driving experience
                to the fullest.
              </li>
              <li>
                <span>Global Reach:</span> Whether you're traveling locally or
                exploring a new destination, our 24/7 service extends worldwide.
                With our extensive network of affiliates and partners, we can
                arrange luxury car rentals in numerous cities and countries,
                ensuring that your unparalleled driving experience transcends
                borders.
              </li>
            </ul>
            <p>
              At <span>RentX</span>, our commitment to delivering excellence
              knows no time constraints. With our 24/7 service, we are dedicated
              to providing unparalleled support, convenience, and peace of mind
              throughout your entire rental journey. Experience luxury on your
              terms, anytime, anywhere.
            </p>
          </div>
        </div>
        <img
          className="brands-image"
          src={locationsImage}
          alt="section-image"
        />
      </section>
    </main>
  );
};

export default About;
