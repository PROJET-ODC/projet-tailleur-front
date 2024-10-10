import { useState, useEffect } from "react";

const useScriptLoader = (scriptUrls = []) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.async = true;

        script.onload = () => resolve();
        script.onerror = () => reject(`Failed to load script: ${src}`);

        document.body.appendChild(script);
      });
    };

    const loadAllScripts = async () => {
      try {
        await Promise.all(scriptUrls.map((src) => loadScript(src)));
        setLoaded(true);
      } catch (err) {
        setError(err);
      }
    };

    if (scriptUrls.length) {
      loadAllScripts();
    }
  }, [scriptUrls]);

  return { loaded, error };
};

export default useScriptLoader;
