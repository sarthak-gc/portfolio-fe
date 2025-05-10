import { createRef, type RefObject } from "react";
import { create } from "zustand";

interface ScrollState {
  scrollToSection: (sectionRef: RefObject<HTMLDivElement | null>) => void;
  sectionRefs: {
    home: RefObject<HTMLDivElement | null>;
    about: RefObject<HTMLDivElement | null>;
    project: RefObject<HTMLDivElement | null>;
    contact: RefObject<HTMLDivElement | null>;
  };
}

export const useScrollStore = create<ScrollState>(() => ({
  sectionRefs: {
    home: createRef<HTMLDivElement>(),
    about: createRef<HTMLDivElement>(),
    project: createRef<HTMLDivElement>(),
    contact: createRef<HTMLDivElement>(),
  },
  scrollToSection: (sectionRef) => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  },
}));
