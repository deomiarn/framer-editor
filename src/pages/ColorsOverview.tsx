import { useEffect } from "react";
import { useHeaderTitle } from "@/contexts/headerTitle/useHeaderTitle.ts";

export default function ColorsOverview() {
  const { setTitle } = useHeaderTitle();

  useEffect(() => {
    setTitle("Colors");
  }, [setTitle]);

  return <div>ColorsOverview</div>;
}
