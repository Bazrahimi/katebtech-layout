"use client";
// app/_ui/button/actionButton.tsx

import { ImSpinner10 } from "react-icons/im";
import { cn } from "@katebtech/core";
import { Button } from "./Button";
import type { ActionButtonProps, ButtonOnlyProps } from "./types";

export const ActionButton = ({
  isLoading = false,
  loadingText = "Working…",
  overlay = false,
  wrapperClassName,
  buttonClassName,

  children,
  icon,
  as = "button",
  ...btnProps
}: ActionButtonProps) => {
  const externallyDisabled =
    (btnProps as { disabled?: boolean }).disabled ?? false;

  const effectiveDisabled = externallyDisabled || isLoading;

  const fullWidth = (btnProps as { fullWidth?: boolean }).fullWidth;

  const composedButtonClass = cn(
    fullWidth && "w-full",
    buttonClassName,
    overlay && isLoading && "text-transparent",
  );

  return (
    <div className={cn("relative", wrapperClassName)}>
      {overlay && isLoading && (
        <div
          className="absolute inset-0 z-10 flex items-center justify-center rounded-lg bg-gray-200/60"
          aria-hidden
        >
          <span className="mr-2 text-app-s-dark">{loadingText}</span>
          <ImSpinner10
            className="h-5 w-5 animate-spin text-app-s-dark"
          />
        </div>
      )}

      <Button
        {...(btnProps as ButtonOnlyProps)}
        as={as}
        disabled={effectiveDisabled}
        aria-disabled={effectiveDisabled}
        aria-busy={isLoading}
        className={composedButtonClass}
      >
        {isLoading ? (
          <span className="inline-flex items-center">
            {!overlay && (
              <ImSpinner10
                className="mr-2 h-4 w-4 animate-spin text-app-s-dark"
              />
            )}
            {loadingText}
          </span>
        ) : (
          <>
            {icon && <span className="flex-shrink-0">{icon}</span>}
            {children}
          </>
        )}
      </Button>
    </div>
  );
};
