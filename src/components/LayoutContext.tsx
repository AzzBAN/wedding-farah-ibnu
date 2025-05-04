"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type LayoutContextType = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export const LayoutProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return <LayoutContext.Provider value={{ isOpen, setIsOpen }}>{children}</LayoutContext.Provider>;
};

export const useLayout = () => {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error("useLayout must be used within a LayoutProvider");
  }
  return context;
};
