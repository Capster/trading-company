import { useState, useEffect } from "react";

export const useMenu = (): [boolean, () => void] => {
  const [expanded, setExpanded] = useState(false);
  const toggleMenu = () => setExpanded(!expanded);

  useEffect(() => {
    const onResize = () => {
      if (window.outerWidth >= 984) {
        setExpanded(false);
      }
    }

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return [expanded, toggleMenu]
};
