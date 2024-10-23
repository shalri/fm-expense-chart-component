import { RefObject, useCallback, useEffect, useState } from "react";

export function useMobileNav(
  navRef: RefObject<HTMLDivElement>,
  isSmallScreen: boolean,
) {
  const [isMobileNavActive, setIsMobileNavActive] = useState(false); // code the design state

  const closeMobileNav = useCallback(() => {
    if (isSmallScreen) {
      setIsMobileNavActive(false);
    }
  }, [isSmallScreen]);

  const toggleMobileNav = useCallback(() => {
    setIsMobileNavActive((prev) => !prev);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setIsMobileNavActive(false);
      }
    };
    const updateBodyClass = () => {
      if (isMobileNavActive) {
        document.body.classList.add("no-scroll");
      } else {
        document.body.classList.remove("no-scroll");
      }
    };

    document.addEventListener("click", handleClickOutside);
    updateBodyClass();

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.body.classList.remove("no-scroll");
    };
  }, [isMobileNavActive, navRef]);

  return { isMobileNavActive, toggleMobileNav, closeMobileNav };
}
