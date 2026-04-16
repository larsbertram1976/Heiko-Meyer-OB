"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function SmoothScroll() {
  const pathname = usePathname();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Add smooth-scroll class only for anchor clicks
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      if (anchor?.hash && anchor.href.includes("#")) {
        document.documentElement.classList.add("smooth-scroll");
        setTimeout(() => {
          document.documentElement.classList.remove("smooth-scroll");
        }, 1000);
      }
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
