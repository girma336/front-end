import { useEffect, useState } from "react";

// until hydration {width:0,height:0} will be returned. Please use a loading skeleton if needed.

const useScreenSize = () => {
  // window is undefined until NextJS hydration. using {width:0,height:0} as initial state.
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  const handleResize = () => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  };

  useEffect(() => {
    if (window) {
      setWindowSize(() => ({
        width: window.innerWidth,
        height: window.innerHeight,
      }));
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return windowSize;
};
export default useScreenSize;
