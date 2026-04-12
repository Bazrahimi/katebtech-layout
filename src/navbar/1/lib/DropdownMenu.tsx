"use client";

import { HiChevronDown } from "react-icons/hi";
import type { DropdownMenuProps } from "../types";
import { useDropdownMenu } from "./useDropdownMenu";

export const DropdownMenu = ({
  buttonContent,
  menuLabel,
  itemCount,
  children,
  buttonClassName,
  menuClassName,
  chevronClassName,
  align = "center",
}: DropdownMenuProps) => {
  const {
    open,
    setOpen,
    rootRef,
    btnRef,
    setItemRef,
    onButtonKeyDown,
    onMenuKeyDown,
  } = useDropdownMenu(itemCount);

  const alignmentClass =
    align === "right"
      ? "absolute right-0 top-full"
      : align === "left"
        ? "absolute left-0 top-full"
        : "absolute left-1/2 top-full -translate-x-1/2";

  return (
    <div ref={rootRef} className="relative">
      <button
        ref={btnRef}
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v: boolean) => !v)}
        onKeyDown={onButtonKeyDown}
        className={buttonClassName}
      >
        {buttonContent}
        <HiChevronDown
          className={
            chevronClassName ??
            `h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`
          }
        />
      </button>

      {open && (
        <div
          role="menu"
          aria-label={menuLabel}
          onKeyDown={onMenuKeyDown}
          className={`${alignmentClass} ${menuClassName ?? ""}`}
        >
          {children({
            setItemRef,
            closeMenu: () => setOpen(false),
          })}
        </div>
      )}
    </div>
  );
};
