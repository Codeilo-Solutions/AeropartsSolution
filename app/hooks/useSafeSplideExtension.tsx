import { useEffect, useState } from "react";

export function useSafeSplideExtension() {
  const [AutoScroll, setAutoScroll] = useState<any>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    import("@splidejs/splide-extension-auto-scroll").then((mod) => {
      setAutoScroll(mod.AutoScroll || mod.default);
    });
  }, []);

  return AutoScroll;
}
