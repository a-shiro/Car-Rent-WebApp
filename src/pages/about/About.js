import { Article } from "./components/Article";

export const About = () => {
  const articleSections = {
    companyHistory: {
      text: "The company was founded....asdasd Phasellus sed libero tincidunt, tincidunt nunc at, posuere metus. Mauris efficitur imperdiet venenatis. Pellentesque auctor lectus ut",
      img: "https://autozona.bg/wp-content/uploads/2023/01/2022-McLaren-720S-1024x576-1.webp",
    },
    ourCars: {
      text: "The company was founded....asdasd Phasellus sed libero tincidunt, tincidunt nunc at, posuere metus. Mauris efficitur imperdiet venenatis. Pellentesque auctor lectus ut",
      img: "https://autozona.bg/wp-content/uploads/2023/01/2022-McLaren-720S-1024x576-1.webp",
    },
    outServices: {
      text: "The company was founded....asdasd Phasellus sed libero tincidunt, tincidunt nunc at, posuere metus. Mauris efficitur imperdiet venenatis. Pellentesque auctor lectus ut",
      img: "https://autozona.bg/wp-content/uploads/2023/01/2022-McLaren-720S-1024x576-1.webp",
    },
  };

  return (
    <main>
      <header>
        <h1>RentX - About us</h1>
      </header>
      <div>
        <div>
          <h2>About the company</h2>
          <Article
            sectionImg={articleSections.companyHistory.img}
            sectionText={articleSections.companyHistory.text}
          />
        </div>
        <div>
          <h2>About the cars</h2>
          <Article
            sectionImg={articleSections.ourCars.img}
            sectionText={articleSections.ourCars.text}
          />
        </div>
        <div>
          <h2>About the service</h2>
          <Article
            sectionImg={articleSections.outServices.img}
            sectionText={articleSections.outServices.text}
          />
        </div>
      </div>
    </main>
  );
};
