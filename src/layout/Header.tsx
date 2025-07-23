import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export function Header() {
  return (
    <label className="relative h-9 w-full">
      <Input
        type="search"
        placeholder="Search…"
        className="
          h-full w-full rounded-[20px] bg-white/5
          backdrop-blur ring-1 ring-white/10
          placeholder:text-white/60 text-sm text-white
          pl-9
          focus:ring-2 focus:ring-white/20
        "
      />
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-white/70 pointer-events-none" />
    </label>
  );
}
