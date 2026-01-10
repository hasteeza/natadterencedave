import { createContext, useContext, useState } from "react";

const HeroBgContext = createContext();

export function HeroBgProvider({ children }) {
  const [heroBgColor, setHeroBgColor] = useState("#3F5563");

  return (
    <HeroBgContext.Provider value={{ heroBgColor, setHeroBgColor }}>
      {children}
    </HeroBgContext.Provider>
  );
}

export function useHeroBg() {
  return useContext(HeroBgContext);
}
