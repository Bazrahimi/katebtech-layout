"use client";

import { Button } from "@katebtech/layout/button";
import { useFormStatus } from "react-dom";
import { HiArrowRightOnRectangle } from "react-icons/hi2";

export function LogoutButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      fullWidth
      variant="danger"
      size="xs"
      disabled={pending}
    >
      <span className="inline-flex items-center gap-2">
        <HiArrowRightOnRectangle className="h-4 w-4" />
        {pending ? "Logging out..." : "Log out"}
      </span>
    </Button>
  );
}
