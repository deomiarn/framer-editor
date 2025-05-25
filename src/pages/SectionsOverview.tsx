import { useHeaderTitle } from "@/contexts/headerTitle/useHeaderTitle.ts";
import { useEffect } from "react";

export default function SectionsOverview() {
  const { setTitle } = useHeaderTitle();

  useEffect(() => {
    setTitle("Sections");
  }, [setTitle]);

  return <div>SectionsOverview</div>;
}
