import styles from "../Home.module.css";

export const Locations = () => {
  return (
    <section className={styles.locationSection} id="locations">
      <div className={styles.container}>
        <header className={styles.locationHeader}>
          <h1>- Locations -</h1>
        </header>

        <div>
          <button>Cities</button>
          <button>Countries</button>
        </div>

        <div className={styles.displayContainer}>
          <div>
            <img
              width="250px"
              height="250px"
              src="https://lp-cms-production.imgix.net/2021-02/Tokyo%20Main.jpg"
              alt=""
            />
            <p>Location Name Placeholder</p>
          </div>
          <div>
            <img
              width="250px"
              height="250px"
              src="https://lp-cms-production.imgix.net/2021-02/Tokyo%20Main.jpg"
              alt=""
            />
            <p>Location Name Placeholder</p>
          </div>
          <div>
            <img
              width="250px"
              height="250px"
              src="https://lp-cms-production.imgix.net/2021-02/Tokyo%20Main.jpg"
              alt=""
            />
            <p>Location Name Placeholder</p>
          </div>
          <div>
            <img
              width="250px"
              height="250px"
              src="https://lp-cms-production.imgix.net/2021-02/Tokyo%20Main.jpg"
              alt=""
            />
            <p>Location Name Placeholder</p>
          </div>
        </div>
      </div>
    </section>
  );
};
