import Hero from "./components/Hero/Hero";
import { PopularChoices } from "./components/PopularChoices/PopularChoices";
import { Brands } from "./components/Brands/Brands";
import { Locations } from "./components/Locations/Locations";
import { About } from "./components/About/About";

export const Home = () => {
  return (
    <main>
      <Hero />
      <PopularChoices />
      <Locations />
      <Brands />
      <About />
    </main>
  );
};
