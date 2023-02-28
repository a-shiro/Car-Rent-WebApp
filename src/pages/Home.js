export const Home = () => {
  return (
    <div>
      <nav className="navigation">
        <img
          src="https://hips.hearstapps.com/hmg-prod/images/2019-honda-civic-sedan-1558453497.jpg?resize=480:*"
          height="100px"
          width="150px"
        />
        <div style={{ display: "inline-block" }}>
          <a>Home</a>
          <a>Cars</a>
          <a>About</a>
          <a>Contacts</a>
        </div>
      </nav>

      <div className="featured">
        <div>
          <h1>Rent a Civic Today</h1>
          <h2>Most prestegious car</h2>
          <button>Read More</button>
        </div>
        <img
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
          src="https://hips.hearstapps.com/hmg-prod/images/2019-honda-civic-sedan-1558453497.jpg?resize=480:*"
        />
      </div>

      <div className="popular-choices">
        <h1>Popular Choices</h1>
        <div style={{ display: "flex" }}>
          <div>
            <img
              style={{ borderRadius: "100%" }}
              src="https://cdn4.focus.bg/fakti/photos/big/c1f/lamborghini-aventador-ultimae-e-finalnata-versia-na-italianskia-superkar-9.jpg"
            />
            <p>Car Name Placeholder</p>
          </div>
          <div>
            <img
              style={{ borderRadius: "100%" }}
              src="https://cdn4.focus.bg/fakti/photos/big/c1f/lamborghini-aventador-ultimae-e-finalnata-versia-na-italianskia-superkar-9.jpg"
            />
            <p>Car Name Placeholder</p>
          </div>
          <div>
            <img
              style={{ borderRadius: "100%" }}
              src="https://cdn4.focus.bg/fakti/photos/big/c1f/lamborghini-aventador-ultimae-e-finalnata-versia-na-italianskia-superkar-9.jpg"
            />
            <p>Car Name Placeholder</p>
          </div>
          <div>
            <img
              style={{ borderRadius: "100%" }}
              src="https://cdn4.focus.bg/fakti/photos/big/c1f/lamborghini-aventador-ultimae-e-finalnata-versia-na-italianskia-superkar-9.jpg"
            />
            <p>Car Name Placeholder</p>
          </div>
        </div>
        <button>All cars</button>
      </div>

      <div className="locations">
        <h1>Locations</h1>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <img
              width="250px"
              height="250px"
              src="https://lp-cms-production.imgix.net/2021-02/Tokyo%20Main.jpg"
            />
            <p>Location Name Placeholder</p>
          </div>
          <div>
            <img
              width="250px"
              height="250px"
              src="https://lp-cms-production.imgix.net/2021-02/Tokyo%20Main.jpg"
            />
            <p>Location Name Placeholder</p>
          </div>
          <div>
            <img
              width="250px"
              height="250px"
              src="https://lp-cms-production.imgix.net/2021-02/Tokyo%20Main.jpg"
            />
            <p>Location Name Placeholder</p>
          </div>
          <div>
            <img
              width="250px"
              height="250px"
              src="https://lp-cms-production.imgix.net/2021-02/Tokyo%20Main.jpg"
            />
            <p>Location Name Placeholder</p>
          </div>
        </div>
      </div>

      <div className="brands">
        <h1>Brands</h1>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <img
              width="250px"
              height="150px"
              src="https://1000logos.net/wp-content/uploads/2018/03/Honda-logo.png"
            />
            <p>Brand Name Placeholder</p>
          </div>
          <div>
            <img
              width="250px"
              height="150px"
              src="https://1000logos.net/wp-content/uploads/2018/03/Honda-logo.png"
            />
            <p>Brand Name Placeholder</p>
          </div>
          <div>
            <img
              width="250px"
              height="150px"
              src="https://1000logos.net/wp-content/uploads/2018/03/Honda-logo.png"
            />
            <p>Brand Name Placeholder</p>
          </div>
          <div>
            <img
              width="250px"
              height="150px"
              src="https://1000logos.net/wp-content/uploads/2018/03/Honda-logo.png"
            />
            <p>Brand Name Placeholder</p>
          </div>
        </div>
      </div>

      <div className="about"></div>

      <footer>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <p>Contacts:</p>
            <p>0000000000</p>
            <p>example@email.com</p>
          </div>
          <div>
            <p>Socials:</p>
            <p>Instagram</p>
            <p>Facebook</p>
          </div>
          <div>
            <p>Terms Of Service</p>
            <p>Pricacy Policy</p>
          </div>
        </div>
        <p style={{ display: "flex", justifyContent: "center" }}>
          Copyright © 2023 rentX. All rights reserved
        </p>
      </footer>
    </div>
  );
};
