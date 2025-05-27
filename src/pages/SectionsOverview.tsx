import { useHeaderTitle } from "@/contexts/headerTitle/useHeaderTitle.ts";
import { useEffect } from "react";

export default function SectionsOverview() {
  const { setTitle } = useHeaderTitle();

  useEffect(() => {
    setTitle("Sections");
  }, [setTitle]);

  return <div className="space-y-2">{/*TODO: Implement Sections Overview*/}</div>;
}
