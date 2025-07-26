import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import * as React from "react";

interface CategoryCardProps {
  label: string;
  href: string;
  icon: React.ReactNode;
  className?: string;
}

export function CategoryCard({ label, href, icon, className }: CategoryCardProps) {
  const base = cn(
    "flex flex-col items-center justify-center gap-2",
    "w-full h-36 rounded-xl",
    "border border-white/35 bg-white/30 backdrop-blur-2xl",
    "text-white shadow-sm",
    "transition-all duration-150",
    "hover:text-white hover:bg-white/35 hover:border-white/60",
    className
  );

  return (
    <Link to={href} aria-label={label} className={base}>
      {icon}
      <span>{label}</span>
    </Link>
  );
}
