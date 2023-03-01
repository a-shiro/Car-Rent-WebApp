import { Brands } from "./components/Brands";
import { Featured } from "./components/Featured";
import { Locations } from "./components/Locations";
import { PopularChoices } from "./components/PopularChoices";
import { About } from "./components/About";

export const Home = () => {
  return (
    <div>
      <Featured />
      <PopularChoices />
      <Locations />
      <Brands />
      <About />
    </div>
  );
};
