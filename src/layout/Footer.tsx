import { Brush, Home, LayoutGrid, Palette, Settings } from "lucide-react";
import { NavIcon } from "@/components/navigation/NavIcon";

export function Footer() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-4 pointer-events-none">
      <div
        className="
          mx-auto pointer-events-auto flex items-center justify-center gap-4 px-3 py-3
          rounded-xl bg-secondary
          backdrop-blur-2xl ring-1 ring-border/80 shadow-md
        "
      >
        <NavIcon label="Home" href="/">
          <Home size={20} />
        </NavIcon>
        <NavIcon label="Sections" href="/sections">
          <LayoutGrid size={20} />
        </NavIcon>
        <NavIcon label="Style" href="/style">
          <Palette size={20} />
        </NavIcon>
        <NavIcon label="Customizer" href="/editor">
          <Brush size={20} />
        </NavIcon>
        <NavIcon label="Settings" href="/settings">
          <Settings size={20} />
        </NavIcon>
      </div>
    </div>
  );
}
