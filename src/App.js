import { Nav } from "./common/Navigation";
import { Footer } from "./common/Footer";
import { RoutesManager } from "./setup/routes-manager/RoutesManager";
import { BrowserRouter } from "react-router-dom";
import { useState, createContext } from "react";

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState("init");

  return (
    <UserContext.Provider value={[user, setUser]}>
      <BrowserRouter>
        <Nav />
        <RoutesManager />
        <Footer />
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
