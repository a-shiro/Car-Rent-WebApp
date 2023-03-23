import { Article } from "./components/Article";
import styles from "./About.module.css";

export const About = () => {
  const articleSections = {
    companyHistory: {
      title: "- The company -",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint quidem distinctio aliquam. Quas at deserunt delectus adipisci, nobis itaque corrupti natus animi maxime, et excepturi quo quaerat quasi nostrum? Assumenda iusto aut itaque nam eaque adipisci fugit praesentium tempore ut, eum illo laudantium suscipit iste consectetur incidunt aperiam dolores? Porro, vero earum in necessitatibus suscipit sint sequi voluptatum blanditiis neque excepturi voluptates quam amet voluptate, ab qui cum dolore quibusdam soluta maxime aliquam aliquid est aperiam esse? Enim ad modi, eos eligendi, nemo sequi expedita quisquam minus recusandae, ducimus provident maiores voluptates aliquid? Numquam reprehenderit veniam voluptas natus, consequuntur saepe qui ducimus ipsa est? Aut praesentium facere perspiciatis, minus non veniam laboriosam commodi atque blanditiis, expedita libero eos omnis maxime fugit. Sint quasi magni maiores vero fuga sit harum ab iusto, doloribus nisi modi suscipit vitae, aperiam, repellendus dolor culpa ea veniam placeat labore laborum sapiente at? Porro cumque officiis doloremque enim. Iste explicabo aut quam, facere dolorum fuga odio velit suscipit, sunt quis praesentium eius! Veniam nam deleniti nulla optio, fugit quo, et suscipit, quae eligendi numquam doloribus quas non sequi animi voluptatibus libero aspernatur unde eius? Porro facere consequatur sequi doloremque, eligendi unde vitae ex accusamus dolorem minima?",
      img: "https://autozona.bg/wp-content/uploads/2023/01/2022-McLaren-720S-1024x576-1.webp",
    },
    ourCars: {
      title: "- The cars -",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint quidem distinctio aliquam. Quas at deserunt delectus adipisci, nobis itaque corrupti natus animi maxime, et excepturi quo quaerat quasi nostrum? Assumenda iusto aut itaque nam eaque adipisci fugit praesentium tempore ut, eum illo laudantium suscipit iste consectetur incidunt aperiam dolores? Porro, vero earum in necessitatibus suscipit sint sequi voluptatum blanditiis neque excepturi voluptates quam amet voluptate, ab qui cum dolore quibusdam soluta maxime aliquam aliquid est aperiam esse? Enim ad modi, eos eligendi, nemo sequi expedita quisquam minus recusandae, ducimus provident maiores voluptates aliquid? Numquam reprehenderit veniam voluptas natus, consequuntur saepe qui ducimus ipsa est? Aut praesentium facere perspiciatis, minus non veniam laboriosam commodi atque blanditiis, expedita libero eos omnis maxime fugit. Sint quasi magni maiores vero fuga sit harum ab iusto, doloribus nisi modi suscipit vitae, aperiam, repellendus dolor culpa ea veniam placeat labore laborum sapiente at? Porro cumque officiis doloremque enim. Iste explicabo aut quam, facere dolorum fuga odio velit suscipit, sunt quis praesentium eius! Veniam nam deleniti nulla optio, fugit quo, et suscipit, quae eligendi numquam doloribus quas non sequi animi voluptatibus libero aspernatur unde eius? Porro facere consequatur sequi doloremque, eligendi unde vitae ex accusamus dolorem minima?",
      img: "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20221019114208_Urus_Performante_Giallo_Inti_Track_HIGH_Z9A2323.jpg&w=726&h=482&q=75&c=1",
    },
    ourServices: {
      title: "- The service -",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint quidem distinctio aliquam. Quas at deserunt delectus adipisci, nobis itaque corrupti natus animi maxime, et excepturi quo quaerat quasi nostrum? Assumenda iusto aut itaque nam eaque adipisci fugit praesentium tempore ut, eum illo laudantium suscipit iste consectetur incidunt aperiam dolores? Porro, vero earum in necessitatibus suscipit sint sequi voluptatum blanditiis neque excepturi voluptates quam amet voluptate, ab qui cum dolore quibusdam soluta maxime aliquam aliquid est aperiam esse? Enim ad modi, eos eligendi, nemo sequi expedita quisquam minus recusandae, ducimus provident maiores voluptates aliquid? Numquam reprehenderit veniam voluptas natus, consequuntur saepe qui ducimus ipsa est? Aut praesentium facere perspiciatis, minus non veniam laboriosam commodi atque blanditiis, expedita libero eos omnis maxime fugit. Sint quasi magni maiores vero fuga sit harum ab iusto, doloribus nisi modi suscipit vitae, aperiam, repellendus dolor culpa ea veniam placeat labore laborum sapiente at? Porro cumque officiis doloremque enim. Iste explicabo aut quam, facere dolorum fuga odio velit suscipit, sunt quis praesentium eius! Veniam nam deleniti nulla optio, fugit quo, et suscipit, quae eligendi numquam doloribus quas non sequi animi voluptatibus libero aspernatur unde eius? Porro facere consequatur sequi doloremque, eligendi unde vitae ex accusamus dolorem minima?",
      img: "https://www.autocar.co.uk/sites/autocar.co.uk/files/1-porsche-911-gt3-2021-rt-hero-front.jpg",
    },
  };

  return (
    <main>
      <header className={styles.Header}>
        <h1>- RentX - About us -</h1>
      </header>
      <div className={styles.Container}>
        <section>
          <div className={styles.SectionContainer}>
            <img
              className={styles.SectionImage}
              src={articleSections.companyHistory.img}
              alt="article-image"
            />
            <Article
              sectionTitle={articleSections.companyHistory.title}
              sectionText={articleSections.companyHistory.text}
            />
          </div>
        </section>
        <section>
          <div className={styles.SectionContainer}>
            <Article
              sectionTitle={articleSections.ourCars.title}
              sectionText={articleSections.ourCars.text}
            />
            <img
              className={styles.SectionImage}
              src={articleSections.ourCars.img}
              alt="article-image"
            />
          </div>
        </section>
        <section>
          <div className={styles.SectionContainer}>
            <img
              className={styles.SectionImage}
              src={articleSections.ourServices.img}
              alt="article-image"
            />
            <Article
              sectionTitle={articleSections.ourServices.title}
              sectionText={articleSections.ourServices.text}
            />
          </div>
        </section>
      </div>
    </main>
  );
};
