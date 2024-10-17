import { useEffect } from "react";

const useRemoveScripts = () => {
  useEffect(() => {
    // Select and remove all script elements
    const removeAllScripts = () => {
      const scripts = document.querySelectorAll("script");
      scripts.forEach((script) => {
        script.parentNode.removeChild(script);
      });
    };

    // Run it before the React component mounts
    removeAllScripts();
  }, []); // Empty dependency array ensures it runs once on mount
};

export default useRemoveScripts;
