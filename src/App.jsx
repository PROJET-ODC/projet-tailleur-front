import { useContext } from "react";
import { Routes } from "./routes";
import { AuthContext } from "./context/AuthContext";

function App() {

  const { isAuth } = useContext(AuthContext);
  
  return <Routes isAuthorized={isAuth} />;
}

export default App;
