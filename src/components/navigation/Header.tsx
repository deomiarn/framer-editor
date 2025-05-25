import { ArrowLeft, Search, Smile } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { useSmartBack } from "@/hooks/useSmartBack.ts";
import { useHeaderTitle } from "@/contexts/headerTitle/useHeaderTitle.ts";

export default function Header() {
  const goBack = useSmartBack();
  const { title } = useHeaderTitle();

  return (
    <header className="fixed top-0 left-0 w-full border-t px-4 py-4 shadow-sm z-50 bg-white">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="cursor-pointer" onClick={goBack}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-lg font-semibold">{title}</h1>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="cursor-pointer">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="cursor-pointer">
            <Smile className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
