import { NavigationItem } from "@/components/navigation/NavigationItem";
import { BlocksIcon, DatabaseIcon, PaletteIcon, TypeIcon } from "lucide-react";
import { NavigationDivider } from "@/components/navigation/NavigationDivider.tsx";
import { useSmartNavigate } from "@/hooks/useSmartNavigate.ts";

const Home = () => {
  const navigate = useSmartNavigate();

  return (
    <div className="flex w-full flex-col gap-1 p-2">
      <NavigationDivider label="Explore" />
      <NavigationItem
        icon={<BlocksIcon />}
        label="Components"
        onClick={() => navigate("/components", "/")}
      />
      <NavigationItem
        icon={<TypeIcon />}
        label="Typography"
        onClick={() => navigate("/typography", "/")}
      />
      <NavigationItem
        icon={<PaletteIcon />}
        label="Colors"
        onClick={() => navigate("/colors", "/")}
      />

      <NavigationDivider label="Generate" />
      <NavigationItem icon={<DatabaseIcon />} label="CMS" onClick={() => navigate("/cms", "/")} />
    </div>
  );
};

export default Home;
