import {
  BlocksIcon,
  BoxIcon,
  DatabaseIcon,
  FilePenIcon,
  FileType2Icon,
  PaletteIcon,
  TypeIcon
} from "lucide-react";
import { CategoryCard } from "@/components/navigation/CategoryCard";
import { NavigationDivider } from "@/components/navigation/NavigationDivider";
import { useHeaderTitle } from "@/contexts/headerTitle/useHeaderTitle";
import { useEffect } from "react";

const icon = (Comp: typeof BoxIcon) => <Comp size={32} />;

export default function Home() {
  const { setTitle } = useHeaderTitle();
  useEffect(() => setTitle("Home"), [setTitle]);

  return (
    <div className="space-y-4 pb-24">
      {/* ---------- Explore ---------- */}
      <section>
        <NavigationDivider label="Explore" />
        <div className="grid grid-cols-2 gap-3.5 mt-2">
          <CategoryCard label="Sections" href="/sections" icon={icon(BoxIcon)} />
          <CategoryCard label="Components" href="/components" icon={icon(BlocksIcon)} />
          <CategoryCard label="Typography" href="/typography" icon={icon(TypeIcon)} />
          <CategoryCard label="Colors" href="/colors" icon={icon(PaletteIcon)} />
          <CategoryCard label="CMS" href="/cms" icon={icon(DatabaseIcon)} />
        </div>
      </section>

      {/* ---------- Generate ---------- */}
      <section>
        <NavigationDivider label="Generate" />
        <div className="grid grid-cols-2 gap-3.5 mt-2">
          <CategoryCard label="Page AI" href="/page-gen" icon={icon(FilePenIcon)} />
          <CategoryCard label="Context AI" href="/typography-gen" icon={icon(FileType2Icon)} />
        </div>
      </section>
    </div>
  );
}
