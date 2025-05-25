import { NavigationItem } from "@/components/navigation/NavigationItem";
import { BlocksIcon, DatabaseIcon, PaletteIcon, StarIcon, TypeIcon } from "lucide-react";
import { NavigationDivider } from "@/components/navigation/NavigationDivider.tsx";

const Home = () => {
  return (
    <div className="flex w-full flex-col gap-1 p-2">
      <NavigationDivider label={"Explore"} />
      <NavigationItem icon={<BlocksIcon />} label="Components" />
      <NavigationItem icon={<TypeIcon />} label="Typography" />
      <NavigationItem icon={<PaletteIcon />} label="Colors" />
      <NavigationDivider label={"Generate"} />
      <NavigationItem icon={<DatabaseIcon />} label="CMS" />
      <NavigationItem icon={<StarIcon />} label="AI" />
    </div>
  );
};
export default Home;
