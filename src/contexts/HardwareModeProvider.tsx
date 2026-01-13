import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import { HardwareModeContext } from "./HardwareModeContext";

interface HardwareModeContextType {
  isHardware: boolean;
  toggleMode: () => void;
}

export const HardwareModeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isHardware, setIsHardware] = useState(false);

  useEffect(() => {
    const checkHardwareMode = () => {
      const params = new URLSearchParams(window.location.search);
      setIsHardware(params.has("hardware"));
    };

    // Check on mount
    checkHardwareMode();

    // Listen for popstate (back/forward buttons)
    window.addEventListener("popstate", checkHardwareMode);

    return () => {
      window.removeEventListener("popstate", checkHardwareMode);
    };
  }, []);

  const toggleMode = () => {
    const url = new URL(window.location.href);
    if (isHardware) {
      url.searchParams.delete("hardware");
    } else {
      url.searchParams.set("hardware", "");
    }
    window.history.pushState({}, "", url);
    setIsHardware(!isHardware);
  };

  return (
    <HardwareModeContext.Provider value={{ isHardware, toggleMode }}>
      {children}
    </HardwareModeContext.Provider>
  );
};
