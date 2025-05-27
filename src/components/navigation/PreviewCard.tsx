import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "lucide-react";

type ComponentCardProps = {
  title: string;
  variantAmount: number;
  image: string;
  onClick?: () => void;
};

export function PreviewCard({ title, variantAmount, image, onClick }: ComponentCardProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "group flex items-center w-full text-left p-3 rounded-xl transition-colors cursor-pointer",
        "hover:bg-primary-foreground"
      )}
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-4">
          <img src={image} alt={title} className="w-16 h-12 object-cover rounded-md" />
          <div className="text-left">
            <p className="text-sm font-medium text-foreground">{title}</p>
            <p className="text-sm text-muted-foreground">{variantAmount} variants</p>
          </div>
        </div>
        <ArrowRightIcon className="h-4 w-4 text-muted-foreground transition-opacity group-hover:opacity-100 opacity-0" />
      </div>
    </button>
  );
}
