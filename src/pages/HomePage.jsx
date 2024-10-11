import scriptUrls from "../utils/scriptsUrl";
import useScriptLoader from "../hooks/useScriptLoader";
import PostPage from "./PostPage";

function HomePage() {
  useScriptLoader(scriptUrls);
  return (
    <>
      <PostPage />
    </>
  );
}

export default HomePage;
