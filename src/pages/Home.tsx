import { NavigationCard } from "@/components/navigation/NavigationCard.tsx";
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
import { useHeaderTitle } from "@/contexts/headerTitle/useHeaderTitle.ts";
import { useEffect } from "react";

const Home = () => {
  const navigate = useSmartNavigate();
  const { setTitle } = useHeaderTitle();

  useEffect(() => {
    setTitle("Home");
  }, [setTitle]);

  return (
    <div className="flex w-full flex-col gap-1">
      <NavigationDivider label="Explore" />
      <NavigationCard
        icon={<BoxIcon />}
        label="Sections"
        onClick={() => navigate("/sections", "/")}
      />
      <NavigationCard
        icon={<BlocksIcon />}
        label="Components"
        onClick={() => navigate("/components", "/")}
      />
      <NavigationCard
        icon={<TypeIcon />}
        label="Typography"
        onClick={() => navigate("/typography", "/")}
      />
      <NavigationCard
        icon={<PaletteIcon />}
        label="Colors"
        onClick={() => navigate("/colors", "/")}
      />
      <NavigationCard icon={<DatabaseIcon />} label="CMS" onClick={() => navigate("/cms", "/")} />

      <NavigationDivider label="Generate" />
      <NavigationCard
        icon={<FilePenIcon />}
        label="Page AI"
        onClick={() => navigate("/page-gen", "/")}
      />
      <NavigationCard
        icon={<FileType2Icon />}
        label="Context AI"
        onClick={() => navigate("/typography-gen", "/")}
      />
      <NavigationCard
        icon={<FileType2Icon />}
        label="Context AI"
        onClick={() => navigate("/typography-gen", "/")}
      />
      <NavigationCard
        icon={<FileType2Icon />}
        label="Context AI"
        onClick={() => navigate("/typography-gen", "/")}
      />
    </div>
  );
};

export default Home;
