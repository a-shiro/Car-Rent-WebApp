import { Brands } from "./components/Brands";
import { Featured } from "./components/Featured";
import { Locations } from "./components/Locations";
import { PopularChoices } from "./components/PopularChoices";
import { About } from "./components/About";
import { UserContext } from "../../contexts/UserContext";
import { useContext, useEffect } from "react";
import { getUser } from "../../services/getUser";

export const Home = () => {
  const { setUser } = useContext(UserContext);
  const userId = localStorage.getItem("currentUserId");

  useEffect(() => {
    const fetchUser = async () => {
      setUser(await getUser());
    };
    if (userId) {
      fetchUser();
    }
  }, []);

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
