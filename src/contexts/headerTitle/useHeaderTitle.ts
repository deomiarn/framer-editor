import { useContext } from "react";
import { HeaderTitleContext } from "@/contexts/headerTitle/HeaderTitleContext.tsx";

export function useHeaderTitle() {
  const context = useContext(HeaderTitleContext);
  if (!context) {
    throw new Error("useHeaderTitle must be used within HeaderTitleProvider");
  }
  return context;
}
