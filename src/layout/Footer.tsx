import { Brush, Home, LayoutGrid, Palette, Settings } from "lucide-react";
import { NavIcon } from "@/components/navigation/NavIcon";

export function Footer() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-4 pointer-events-none">
      <div
        className="
          mx-auto pointer-events-auto flex items-center justify-center gap-2 px-3 py-3
          rounded-xl bg-white/40
          backdrop-blur-2xl border border-white/50 shadow-md
        "
      >
        <NavIcon label="Home" href="/" icon={<Home />} />
        <NavIcon label="Home" href="/" icon={<LayoutGrid />} />
        <NavIcon label="Home" href="/" icon={<Palette />} />
        <NavIcon label="Home" href="/" icon={<Brush />} />
        <NavIcon label="Home" href="/" icon={<Settings />} />
      </div>
    </div>
  );
}
