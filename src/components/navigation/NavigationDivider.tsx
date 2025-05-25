type NavigationDividerProps = {
  label: string;
};

export function NavigationDivider({ label }: NavigationDividerProps) {
  return (
    <div className="flex items-center px-3 pt-4 pb-1 gap-2 w-full first:pt-1">
      <span className="text-sm uppercase w-fit whitespace-nowrap text-muted-foreground">
        {label}
      </span>
      <div className="flex-grow border-t border-muted-foreground/30" />
    </div>
  );
}
