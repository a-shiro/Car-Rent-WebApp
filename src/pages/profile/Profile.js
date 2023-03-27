import { Link } from "react-router-dom";
import { auth } from "../../setup/config/firebase";
import styles from "./Profile.module.css";
import vector from "../../assets/images/car-vector.png";

export const Profile = () => {
  // ToDo add currently renting login

  return (
    <main>
      <div className={styles.Container}>
        <div className={styles.ProfileContainer}>
          <h1 className={styles.ProfileContainerTitle}>- Profile -</h1>
          <div className={styles.ProfileInfo}>
            <img
              className={styles.ProfileImage}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png"
            />
            <div>
              <p>
                Name: <span>{auth?.currentUser?.displayName}</span>
              </p>
              <p>
                Email: <span>{auth?.currentUser?.email}</span>
              </p>
              <p>
                Number: <span>{auth?.currentUser?.phoneNumber}</span>
              </p>
            </div>
            <div className={styles.ButtonsContainer}>
              <a>Edit</a>
              <Link to="/administration">To Administation</Link>
            </div>
          </div>
        </div>
        <div>
          <img className={styles.VectorImage} src={vector} />
        </div>
      </div>
      <div className={styles.RentingContainer}>
        <div>
          <h1>- Currently Renting -</h1>
          <span>No cars currently rented</span>
        </div>
      </div>
    </main>
  );
};
