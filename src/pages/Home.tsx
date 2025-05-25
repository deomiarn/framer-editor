import { NavigationItem } from "@/components/navigation/NavigationItem";
import {
  BlocksIcon,
  BoxIcon,
  DatabaseIcon,
  FilePenIcon,
  FileType2Icon,
  PaletteIcon,
  TypeIcon
} from "lucide-react";
import { NavigationDivider } from "@/components/navigation/NavigationDivider.tsx";
import { useSmartNavigate } from "@/hooks/useSmartNavigate.ts";

const Home = () => {
  const navigate = useSmartNavigate();

  return (
    <div className="flex w-full flex-col gap-1 p-2">
      <NavigationDivider label="Explore" />
      <NavigationItem
        icon={<BoxIcon />}
        label="Sections"
        onClick={() => navigate("/sections", "/")}
      />
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
      <NavigationItem icon={<DatabaseIcon />} label="CMS" onClick={() => navigate("/cms", "/")} />

      <NavigationDivider label="Generate" />
      <NavigationItem
        icon={<FilePenIcon />}
        label="Page AI"
        onClick={() => navigate("/page-gen", "/")}
      />
      <NavigationItem
        icon={<FileType2Icon />}
        label="Context AI"
        onClick={() => navigate("/typography-gen", "/")}
      />
      <NavigationItem
        icon={<FileType2Icon />}
        label="Context AI"
        onClick={() => navigate("/typography-gen", "/")}
      />
      <NavigationItem
        icon={<FileType2Icon />}
        label="Context AI"
        onClick={() => navigate("/typography-gen", "/")}
      />
    </div>
  );
};

export default Home;
