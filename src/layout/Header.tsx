import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export function Header() {
  return (
    <label className="relative h-9 w-full">
      <Input
        type="search"
        placeholder="Search…"
        className="rounded-2xl bg-secondary border pl-9 placeholder:text-white/60"
      />
      <Search
        size="16"
        className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60 pointer-events-none"
      />
    </label>
  );
}
