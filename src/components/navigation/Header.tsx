import { ArrowLeft, Search, Smile } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";

export default function Header() {
  return (
    <header className="flex items-center justify-between py-3 w-full border-b">
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          className="cursor-pointer"
          onClick={() => window.history.back()}
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-lg font-semibold">Framer Plugin</h1>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="cursor-pointer">
          <Search className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="cursor-pointer">
          <Smile className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
}
