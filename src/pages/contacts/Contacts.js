import mapLocationIcon from "../../assets/images/map-location.png";
import phoneIcon from "../../assets/images/phone.png";
import carVector from "../../assets/images/car-vector.png";
import "../home/components/PopularChoices/PopularChoices";
import "./Contacts.css";

const Contacts = () => {
  return (
    <main>
      <header className="header-contacts">
        <h1>Our Contacts</h1>
      </header>

      <section className="info-section-contacts">
        <div className="info-wrapper-contacts">
          <div className="info-icon-wrapper-contacts">
            <img className="info-icon-contacts" src={phoneIcon} />
          </div>
          <div>
            <span>Phone:</span>
            <p> +359 88 888 8888</p>
            <span>Email:</span>
            <p>rentx@email.com</p>
          </div>
          <a
            href="https://www.flaticon.com/free-icons/phone"
            title="phone icons"
          >
            Phone icons created by Freepik - Flaticon
          </a>
        </div>

        <hr className="large" />

        <div className="info-wrapper-contacts">
          <div className="info-icon-wrapper-contacts">
            <img src={mapLocationIcon} />
          </div>
          <div>
            <span>Office address:</span>
            <p>California, San Francisco</p>
            <p>94016</p>
            <p>We work 24/7</p>
          </div>
          <a href="https://www.flaticon.com/free-icons/pin" title="pin icons">
            Pin icons created by Freepik - Flaticon
          </a>
        </div>

        <hr className="large" />

        <div className="info-wrapper-contacts">
          <div className="info-icon-wrapper-contacts">
            <img className="info-icon-contacts" src={mapLocationIcon} />
          </div>
          <div>
            <span>Office address:</span>
            <p>Nevada, Las Vegas</p>
            <p>88901</p>
            <p>We work 24/7</p>
          </div>
          <a href="https://www.flaticon.com/free-icons/pin" title="pin icons">
            Pin icons created by Freepik - Flaticon
          </a>
        </div>
      </section>

      <section className="image-section-contacts">
        <img className="vector-image-contacts" src={carVector} />
      </section>
    </main>
  );
};

export default Contacts;
