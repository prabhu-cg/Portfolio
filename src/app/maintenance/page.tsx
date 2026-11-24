import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ErrorStage } from "@/components/ErrorStage";

export const metadata: Metadata = {
  title: "Down for maintenance — Prabhu Raja",
  robots: { index: false },
};

export default function MaintenancePage() {
  return (
    <ErrorStage
      label="Under maintenance"
      title="Back shortly."
      description="The site is down for a quick update. Please check back in a little while."
      actions={
        <Button href="mailto:prabhu_cg@proton.me" variant="secondary" icon={<Mail className="size-4" />} iconPosition="left">
          Get in touch
        </Button>
      }
    />
  );
}
