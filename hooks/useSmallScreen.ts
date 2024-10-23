"use client";

import { useState, useEffect, useCallback } from "react";

export function useSmallScreen(breakpoint: number = 640) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const checkScreenSize = useCallback(() => {
    setIsSmallScreen(window.innerWidth < breakpoint);
  }, [breakpoint]);

  useEffect(() => {
    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, [checkScreenSize]);

  return isSmallScreen;
}
