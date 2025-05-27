import { Button } from "@/components/ui/button.tsx";
import { GithubIcon, TwitterIcon } from "lucide-react";
import { ExternalLink } from "@/components/util/ExternalLink.tsx";

export function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full border-t px-4 py-4 shadow-sm z-50 bg-white">
      <div className="mx-auto flex max-w-screen-lg items-center justify-between text-sm text-muted-foreground">
        <p>
          Made by{" "}
          <ExternalLink
            href="https://templyne.com"
            className="font-semibold text-primary hover:underline"
          >
            Templyne
          </ExternalLink>
        </p>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <ExternalLink href="https://twitter.com/templyne">
              <TwitterIcon className="h-4 w-4" />
            </ExternalLink>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <ExternalLink href="https://github.com/templyne">
              <GithubIcon className="h-4 w-4" />
            </ExternalLink>
          </Button>
        </div>
      </div>
    </footer>
  );
}
