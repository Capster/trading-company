import { useState, useEffect } from "react";

export const useStickyNavbar = (threshold: number): boolean => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY >= threshold);

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return sticky;
};
