import styles from "./About.module.css";
import vector from "../../../../assets/images/car-vector.png";

export const About = () => {
  return (
    <section className={styles.AboutSection}>
      <div className={styles.Container}>
        <header className={styles.Header}>
          <h1>- About Us -</h1>
        </header>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, ea.
            Distinctio, mollitia similique hic asperiores eaque deleniti aliquam
            atque est, itaque accusantium perspiciatis sit ratione sunt quasi
            adipisci non natus corporis? Culpa non veniam expedita autem nihil
            facere a, odit, veritatis, consequuntur corporis illum eligendi
            sequi velit fugiat perferendis voluptatum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, ea.
            Distinctio, mollitia similique hic asperiores eaque deleniti aliquam
            atque est, itaque accusantium perspiciatis sit ratione sunt quasi
            adipisci non natus corporis? Culpa non veniam expedita autem nihil
            facere a, odit, veritatis, consequuntur corporis illum eligendi
            sequi velit fugiat perferendis voluptatum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, ea.
            Distinctio, mollitia similique hic asperiores eaque deleniti aliquam
            atque est, itaque accusantium perspiciatis sit ratione sunt quasi
            adipisci non natus corporis? Culpa non veniam expedita autem nihil
            facere a, odit, veritatis, consequuntur corporis illum eligendi
            sequi velit fugiat perferendis voluptatum.
          </p>
        </div>
      </div>
      <div>
        <img className={styles.AboutImage} src={vector} />
      </div>
    </section>
  );
};
