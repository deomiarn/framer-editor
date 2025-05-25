import { useHeaderTitle } from "@/contexts/headerTitle/useHeaderTitle.ts";
import { useEffect } from "react";

export default function TypographyOverview() {
  const { setTitle } = useHeaderTitle();

  useEffect(() => {
    setTitle("Typography");
  }, [setTitle]);

  return <div>TypographyOverview</div>;
}
