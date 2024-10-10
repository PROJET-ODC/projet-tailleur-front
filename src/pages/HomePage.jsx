import scriptUrls from "../utils/scriptsUrl";
import useScriptLoader from "../hooks/useScriptLoader";

function HomePage() {
  useScriptLoader(scriptUrls);
  
  return (
   <></>
  );
}

export default HomePage;
