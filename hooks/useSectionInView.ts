import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "./useActiveSectionContext";
import { useEffect } from "react";
import type { SectionName } from "@/types/SectionName";

export const useSectionInView = (
  SectionName: SectionName,
  threshold = 0.75
) => {
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  const { ref, inView } = useInView({ threshold });
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      // Delay for 1s
      setActiveSection(SectionName);
    }
  }, [inView, timeOfLastClick]);
  return { ref };
};
