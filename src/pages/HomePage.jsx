import scriptUrls from "../utils/scriptsUrl";
import useScriptLoader from "../hooks/useScriptLoader";
import PostPage from "./PostPage";
import { useEffect, useState } from "react";
import { getFeedsInitData } from "../api/clients";
import { useLoaderData } from "react-router-dom";

function HomePage() {
  useScriptLoader(scriptUrls);
  // const data = useLoaderData();
  // console.log(data);

  const [feedData, setFeedData] = useState([]);

  useEffect(() => {
    const abortCont = new AbortController();
    const fetchData = async () => {
      try {
        const data = await getFeedsInitData();
        setFeedData(data);
        // console.log(data);
      } catch (error) {
        if (!abortCont.signal.aborted) {
          console.error("Failed to fetch data:", error);
        }
      }
    };

    fetchData();
    return () => abortCont.abort();
  }, []);

  return <PostPage />;
}

export default HomePage;
