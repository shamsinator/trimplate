import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Linkedin } from "lucide-react";

export default function BlogDetail() {
  return (
    <div className="mt-12 flex items-center justify-between py-6 border-t border-b">
      <span className="font-medium">Share this article</span>
      <div className="flex space-x-4">
        <Button
          variant="ghost"
          size="icon"
          aria-label="Share on Facebook"
          onClick={() =>
            window.open(
              "https://facebook.com/sharer/sharer.php?u=" +
                window.location.href,
            )
          }
        >
          <Facebook className="w-4 h-4" aria-hidden="true" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Share on Twitter"
          onClick={() =>
            window.open(
              "https://twitter.com/intent/tweet?url=" + window.location.href,
            )
          }
        >
          <Twitter className="w-4 h-4" aria-hidden="true" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Share on LinkedIn"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/sharing/share-offsite/?url=" +
                window.location.href,
            )
          }
        >
          <Linkedin className="w-4 h-4" aria-hidden="true" />
        </Button>
      </div>
    </div>
  );
}
