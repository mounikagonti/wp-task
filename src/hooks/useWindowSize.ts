import { useEffect, useState } from "react";

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", trackWindowSize);
    return () => window.removeEventListener("resize", trackWindowSize);
  });

  const trackWindowSize = () => {
    const width = window.innerWidth;
    setWindowSize(width);
  };

  return { windowSize };
};
