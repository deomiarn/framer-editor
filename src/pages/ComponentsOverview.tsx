import { useHeaderTitle } from "@/contexts/headerTitle/useHeaderTitle.ts";
import { useEffect } from "react";

export default function ComponentsOverview() {
  const { setTitle } = useHeaderTitle();

  useEffect(() => {
    setTitle("Components");
  }, [setTitle]);

  return <div>ComponentsOverview</div>;
}
