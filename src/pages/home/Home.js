import { Featured } from "./components/Featured/Featured";
import { PopularChoices } from "./components/PopularChoices/PopularChoices";
import { Brands } from "./components/Brands/Brands";
import { Locations } from "./components/Locations/Locations";
import { About } from "./components/About/About";

export const Home = () => {
  return (
    <main>
      <Featured />
      <PopularChoices />
      <Locations />
      <Brands />
      <About />
    </main>
  );
};
