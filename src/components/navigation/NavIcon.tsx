import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import * as React from "react";

interface NavIconProps {
  label: string;
  href: string;
  icon: React.ReactElement;
  external?: boolean;
  className?: string;
}

export function NavIcon({ label, href, icon, external = false, className }: NavIconProps) {
  const Icon28 = React.cloneElement(icon, { size: 28 });

  const base = cn(
    "flex items-center justify-center p-3 rounded-xl",
    "text-white transition-all duration-150",
    "hover:text-white hover:bg-white/20 hover:border-white/60",
    className
  );

  if (external) {
    return (
      <ExternalLink href={href} aria-label={label} className={base}>
        {Icon28}
      </ExternalLink>
    );
  }

  return (
    <Link to={href} aria-label={label} className={base}>
      {Icon28}
    </Link>
  );
}
