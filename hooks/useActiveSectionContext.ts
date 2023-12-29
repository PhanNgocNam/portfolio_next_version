import { ActiveSectionContext } from "@/context/ActiveSectionContext";
import { useContext } from "react";
export const useActiveSectionContext = () => {
  const context = useContext(ActiveSectionContext);
  if (context === null) {
    throw new Error("Context must be a not null value.");
  }
  return context;
};
