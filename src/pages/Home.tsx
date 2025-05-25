import { NavigationItem } from "@/components/NavigationItem";
import { BlocksIcon, DatabaseIcon, PaletteIcon, TypeIcon } from "lucide-react";

const Home = () => {
  return (
    <div className="flex w-full flex-col gap-1 p-2">
      <NavigationItem icon={<BlocksIcon />} label="Components" />
      <NavigationItem icon={<DatabaseIcon />} label="CMS" />
      <NavigationItem icon={<TypeIcon />} label="Typography" />
      <NavigationItem icon={<PaletteIcon />} label="Colors" />
    </div>
  );
};
export default Home;
