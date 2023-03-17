import { Nav } from "./common/Navigation";
import { Footer } from "./common/Footer";
import { RoutesManager } from "./setup/routes-manager/RoutesManager";
import { BrowserRouter } from "react-router-dom";
import { UserContext } from "./contexts/UserContext";
import { useCurrentUser } from "./hooks/useCurrentUser";
import { useEffect } from "react";

function App() {
  const [user, fetchCurrentUser] = useCurrentUser();

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  const contextValue = {
    user,
    fetchCurrentUser,
  };

  return (
    <UserContext.Provider value={contextValue}>
      <BrowserRouter>
        <Nav />
        <RoutesManager />
        <Footer />
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
