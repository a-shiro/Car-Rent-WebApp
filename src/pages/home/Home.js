import { Brands } from "./Brands";
import { Featured } from "./Featured";
import { Locations } from "./Locations";
import { PopularChoices } from "./PopularChoices";
import { About } from "./About";

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
