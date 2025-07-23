import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export function Header() {
  return (
    <label className="relative block w-full">
      <Input
        type="search"
        placeholder="Search…"
        className="
          w-full rounded-xl pl-9 py-5
          bg-secondary backdrop-blur-2xl
          border border-white/35
          placeholder:text-white/60
          shadow-md
          focus:outline-none
          focus:ring-2 focus:ring-primary/25 focus:border-primary/60
        "
      />
      <Search
        size={16}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60 pointer-events-none"
      />
    </label>
  );
}
