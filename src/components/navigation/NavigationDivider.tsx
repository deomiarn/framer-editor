type NavigationDividerProps = {
  label: string;
};

export function NavigationDivider({ label }: NavigationDividerProps) {
  return (
    <div className="flex items-center gap-2 px-1 pt-4 pb-1 first:pt-1">
      <span className="text-sm tracking-wider text-white/90 whitespace-nowrap">{label}</span>
      <div className="flex-grow border-t border-white/90" />
    </div>
  );
}
