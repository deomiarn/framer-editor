import { useHeaderTitle } from "@/contexts/headerTitle/useHeaderTitle.ts";
import { useEffect } from "react";
import { Button } from "@/components/ui/button.tsx";
import { framer } from "framer-plugin";

export function SectionsOverview() {
  const { setTitle } = useHeaderTitle();

  useEffect(() => {
    setTitle("Sections");
  }, [setTitle]);

  async function click() {
    await framer.addDetachedComponentLayers({
      url: "https://framer.com/m/01-Hero-ofxf.js",
      layout: true
    });
  }

  return (
    <div className="space-y-2">
      {
        <Button onClick={() => click()}>Here</Button>
        /*TODO: Implement Sections Overview*/
      }
    </div>
  );
}
