import type { Metadata } from "next";
import { ArrowLeft, FolderOpen } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ErrorStage } from "@/components/ErrorStage";

export const metadata: Metadata = {
  title: "Page not found — Prabhu Raja",
};

export default function NotFound() {
  return (
    <ErrorStage
      label="Error 404"
      digits={["4", "4"]}
      title="This page didn't make the cut."
      description="It's broken, moved, or never existed. Head back home or browse the projects instead."
      actions={
        <>
          <Button href="/" icon={<ArrowLeft className="size-4" />} iconPosition="left">
            Back to home
          </Button>
          <Button href="/projects" variant="secondary" icon={<FolderOpen className="size-4" />} iconPosition="left">
            View projects
          </Button>
        </>
      }
    />
  );
}
