import { useState } from "react";
import { HeaderTitleContext } from "@/contexts/headerTitle/HeaderTitleContext.tsx";

export function HeaderTitleProvider({ children }: { children: React.ReactNode }) {
  const [title, setTitle] = useState("Framer Plugin"); // Standard-Titel

  return (
    <HeaderTitleContext.Provider value={{ title, setTitle }}>
      {children}
    </HeaderTitleContext.Provider>
  );
}
