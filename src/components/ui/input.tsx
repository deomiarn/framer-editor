import * as React from "react";
import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "bg-primary/5 border border-input rounded-md h-10 w-full px-3 py-2 text-sm",
        "placeholder:text-muted-foreground file:border-0 file:bg-transparent file:text-sm",
        "focus-visible:outline-none focus-visible:ring-[1.5px] focus-visible:ring-ring",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
      {...props}
    />
  );
}

export { Input };
