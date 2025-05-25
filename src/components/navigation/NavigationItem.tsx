import { ReactNode } from "react";
import { cn } from "@/lib/utils.ts";
import { ArrowRightIcon } from "lucide-react";

type NavigationItemProps = {
  icon: ReactNode;
  label: string;
  onClick?: () => void;
};

export function NavigationItem({ icon, label, onClick }: NavigationItemProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "group flex items-center w-full text-left p-3 rounded-lg transition-colors cursor-pointer",
        "hover:bg-primary-foreground"
      )}
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex gap-4">
          <span className="w-5 h-5 group-hover:text-primary">{icon}</span>
          <span>{label}</span>
        </div>
        <ArrowRightIcon className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </button>
  );
}
