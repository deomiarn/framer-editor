import { createContext } from "react";

type HeaderTitleContextType = {
  title: string;
  setTitle: (title: string) => void;
};

export const HeaderTitleContext = createContext<HeaderTitleContextType | undefined>(undefined);
