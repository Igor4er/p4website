import { createContext, useContext } from "react";

export interface HardwareModeContextType {
  isHardware: boolean;
  toggleMode: () => void;
}

export const HardwareModeContext = createContext<
  HardwareModeContextType | undefined
>(undefined);

export const useHardwareMode = () => {
  const context = useContext(HardwareModeContext);
  if (context === undefined) {
    throw new Error(
      "useHardwareMode must be used within a HardwareModeProvider",
    );
  }
  return context;
};
