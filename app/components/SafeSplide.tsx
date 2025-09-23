import { useEffect, useState } from "react";

let cssImported = false;

export function useSafeSplide() {
  const [Splide, setSplide] = useState<any>(null);
  const [SplideSlide, setSplideSlide] = useState<any>(null);
  const [AutoScroll, setAutoScroll] = useState<any>(null);

  useEffect(() => {
    // Only run in browser
    if (typeof window === "undefined") return;

    // Dynamically import Splide + CSS
    import("@splidejs/react-splide").then((mod) => {
      setSplide(() => mod.Splide);
      setSplideSlide(() => mod.SplideSlide);
    });

    import("@splidejs/splide-extension-auto-scroll").then((mod) => {
      // Some versions export default, some named
      setAutoScroll(() => mod.AutoScroll || mod.default);
    });

    if (!cssImported) {
      import("@splidejs/react-splide/css");
      cssImported = true;
    }
  }, []);

  return { Splide, SplideSlide, AutoScroll };
}
