import { useState, useEffect } from "react";

/**
 * Custom React hook to determine if the screen width is considered "large".
 * It returns `true` for large screens and `false` for mobile screens.
 * The default breakpoint is 768px, commonly used for 'md' in Tailwind CSS.
 *
 * @param {number} breakpoint - The minimum width in pixels for a screen to be considered large.
 * Defaults to 768.
 * @returns {boolean} - `true` if the current screen width is greater than or equal to the breakpoint,
 * `false` otherwise.
 */
const useIsLargeScreen = (breakpoint = 1250): boolean => {
  // Initialize state with the current screen width check
  const [isLargeScreen, setIsLargeScreen] = useState(
    window.innerWidth >= breakpoint,
  );

  useEffect(() => {
    // Function to update the state on resize
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= breakpoint);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [breakpoint]); // Re-run effect if the breakpoint changes

  return isLargeScreen;
};

export default useIsLargeScreen;
