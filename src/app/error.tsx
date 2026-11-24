"use client";

import { useEffect } from "react";
import { Home, RotateCw } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ErrorStage } from "@/components/ErrorStage";

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <ErrorStage
      label="Error 500"
      digits={["5", "0"]}
      title="Something broke on our end."
      description="An unexpected error stopped this page from loading. Try again, or head back home."
      actions={
        <>
          <Button onClick={() => unstable_retry()} icon={<RotateCw className="size-4" />} iconPosition="left">
            Try again
          </Button>
          <Button href="/" variant="secondary" icon={<Home className="size-4" />} iconPosition="left">
            Back to home
          </Button>
        </>
      }
      footnote={error.digest ? <>Reference: <code className="rounded bg-accent-light px-1.5 py-0.5 font-mono text-accent-strong">{error.digest}</code></> : undefined}
    />
  );
}
