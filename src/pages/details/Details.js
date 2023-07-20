import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDataWhere } from "../../services/queries";
import arrowVector from "../../assets/images/arrow.webp";
import { where } from "firebase/firestore";
import "./Details.css";
import { useOutletContext } from "react-router-dom";

const Details = () => {
  const [car, setCar] = useOutletContext();
  const [activePhoto, setActivePhoto] = useState(null);

  const [skeletonVisible, setSkeletonVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSkeletonVisible(false);
    }, 800);

    setActivePhoto(car.photos[0]);

    return () => clearTimeout(timer);
  }, []);

  const nextPhoto = () => {
    const photosArr = car.photos;
    const nextImageIndex = photosArr.indexOf(activePhoto) + 1;
    setActivePhoto(
      car.photos[nextImageIndex === photosArr.length ? 0 : nextImageIndex]
    );
  };

  const prevPhoto = () => {
    const photosArr = car.photos;
    const nextImageIndex = photosArr.indexOf(activePhoto) - 1;
    setActivePhoto(
      car.photos[nextImageIndex < 0 ? photosArr.length - 1 : nextImageIndex]
    );
  };

  const toggleOptionHandler = (e) => {
    const element = e.target;

    document.querySelector(".active").classList.remove("active");
    document.querySelector(".visible").classList.remove("visible");
    element.classList.add("active");

    switch (element.id) {
      case "description":
        document.querySelector("#carDescription").classList.add("visible");
        break;
      case "rental":
        document.querySelector("#rentalConditions").classList.add("visible");
        break;
      case "locations":
        document.querySelector("#availableLocations").classList.add("visible");
        break;
    }
  };

  return (
    <main>
      <section className="section-details">
        <h1>
          {car?.brand} {car?.model}
        </h1>

        <div className="info-wrapper-details">
          <div className="image-wrapper-details">
            <img src={activePhoto} alt={`${car?.model}-photo`} />
            <button onClick={prevPhoto}>
              <img src={arrowVector} />
            </button>
            <button onClick={nextPhoto}>
              <img src={arrowVector} />
            </button>
          </div>

          <div className="table-wrapper-details">
            <div className="rent-details">
              <span>
                from <b>{car?.price}$</b> per day
              </span>
              <span>The minimum rental period is 2 days.</span>
            </div>

            <div className="table-details">
              <span>Car specifications:</span>
              <table>
                <tbody>
                  <tr>
                    <td>Engine</td>
                    <td>{car?.engine}</td>
                  </tr>
                  <tr>
                    <td>Horse Power</td>
                    <td>{car?.horsePower}</td>
                  </tr>
                  <tr>
                    <td>Top Speed</td>
                    <td>{car?.topSpeed}</td>
                  </tr>
                  <tr>
                    <td>0-100 km/h</td>
                    <td>{car?.zeroToHundred}s</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="rent-button-details">
              <button>Rent</button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="full-info-details">
          <div
            onClick={toggleOptionHandler}
            className="options-wrapper-details"
          >
            <button id="description" className="option-button-details active">
              Description
            </button>
            <button id="rental" className="option-button-details">
              Rental conditions
            </button>
            <button id="locations" className="option-button-details">
              Available locations
            </button>
          </div>

          <div
            id="carDescription"
            className="full-info-wrapper-details visible"
          >
            <div>
              <p>
                Introducing the breathtaking Porsche 911 Cabrio, a true icon of
                automotive excellence that combines power, elegance, and
                open-top exhilaration. Crafted with meticulous attention to
                detail, this convertible masterpiece delivers a driving
                experience like no other, merging timeless design with
                cutting-edge engineering.
              </p>
            </div>
            <div>
              <h3>Exterior:</h3>
              <p>
                The Porsche 911 Cabrio boasts a sleek and aerodynamic silhouette
                that captivates onlookers at first glance. Its iconic profile,
                characterized by the signature sloping roofline, muscular
                fenders, and distinctive LED headlights, showcases the perfect
                harmony between tradition and innovation. With a retractable
                soft top, this convertible allows you to effortlessly embrace
                the elements and experience the freedom of the open road.
              </p>
            </div>
            <div>
              <h3>Performance:</h3>
              <p>
                Beneath the striking exterior lies a performance-driven heart
                that sets the Porsche 911 Cabrio apart from the competition.
                Equipped with a range of potent engine options, from the
                spirited flat-six to the adrenaline-pumping turbocharged
                powerhouses, this car delivers blistering acceleration and
                dynamic handling. The precision-engineered chassis, advanced
                suspension system, and responsive steering ensure unrivaled
                agility and corner-carving prowess, elevating your driving
                experience to new heights.
              </p>
            </div>

            <div>
              <h3>Interior:</h3>
              <p>
                Step inside the Porsche 911 Cabrio, and you'll be greeted by a
                luxurious and driver-centric cockpit designed to cater to your
                every need. Premium materials, exquisite craftsmanship, and
                attention to detail create an ambiance that exudes
                sophistication and comfort. The supportive seats, wrapped in
                supple leather, offer the perfect balance between long-distance
                comfort and lateral support during spirited driving. The
                state-of-the-art infotainment system, intuitive controls, and
                advanced driver-assistance features seamlessly integrate
                technology with the driving experience.
              </p>
            </div>

            <div>
              <h3>Features:</h3>
              <p>
                The Porsche 911 Cabrio comes packed with an array of innovative
                features to enhance your journey. From advanced safety systems,
                such as lane-keep assist and adaptive cruise control, to
                cutting-edge connectivity options, including smartphone
                integration and a high-resolution touchscreen display, every
                aspect of this car is designed to keep you connected,
                entertained, and protected on the road.
              </p>
            </div>

            <div>
              <h3>Conclusion:</h3>
              <p>
                The Porsche 911 Cabrio is an automotive masterpiece that blends
                timeless design, exhilarating performance, and open-top motoring
                in a perfect symphony. Whether you're embarking on a thrilling
                weekend drive, cruising along scenic coastal roads, or simply
                enjoying the wind in your hair, this convertible marvel ensures
                an unforgettable experience at every turn. With its undeniable
                charm and unwavering performance pedigree, the Porsche 911
                Cabrio stands as an icon in the world of luxury sports cars.
              </p>
            </div>
          </div>

          <div id="rentalConditions" className="full-info-wrapper-details">
            <div>
              <h3>1. Minimum Age Requirement</h3>
              <p>
                The renter must be at least 25 years old to be eligible for
                renting a luxury car. Proof of age, such as a valid driver's
                license or passport, will be required during the booking
                process.
              </p>
            </div>
            <div>
              <h3>2. Valid Driver's License</h3>
              <p>
                Renters must possess a valid driver's license issued by their
                country of residence. The license should be presented at the
                time of pickup, and it must be valid for the entire duration of
                the rental period.
              </p>
            </div>
            <div>
              <h3>3. Security Deposit</h3>
              <p>
                A security deposit will be collected at the time of vehicle
                pickup. The amount will be specified during the booking process
                and will be held as a pre-authorization on the renter's credit
                card. The deposit will be refunded in full upon safe return of
                the vehicle, subject to any deductions for damages or
                violations.
              </p>
            </div>
            <div>
              <h3>4. Insurance Coverage</h3>
              <p>
                Renters are required to have valid automobile insurance that
                covers luxury vehicles. Proof of insurance will be required
                before the rental agreement can be finalized. In the event of an
                accident or damage to the vehicle, the renter will be
                responsible for the insurance deductible and any additional
                costs not covered by their insurance policy.
              </p>
            </div>
            <div>
              <h3>5. Rental Duration and Mileage</h3>
              <p>
                The minimum rental duration for luxury cars is typically 24
                hours. Mileage restrictions may apply, and excess mileage
                charges may be incurred if the agreed-upon limit is exceeded.
                The exact details of the rental duration and mileage will be
                communicated during the booking process.
              </p>
            </div>
          </div>

          <div id="availableLocations" className="full-info-wrapper-details">
            <p>Available locations</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Details;
