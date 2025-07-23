import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

interface NavIconProps {
  label: string;
  href: string;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
}

export function NavIcon({ label, href, children, external = false, className }: NavIconProps) {
  const base = cn(
    "flex items-center justify-center p-3 rounded-xl",
    "border border-white/40",
    "text-white/70 transition-all duration-150",
    "hover:text-white hover:bg-primary/25",
    "hover:border-white/60",
    className
  );

  if (external) {
    return (
      <ExternalLink href={href} aria-label={label} className={base}>
        {children}
      </ExternalLink>
    );
  }

  return (
    <Link to={href} aria-label={label} className={base}>
      {children}
    </Link>
  );
}
