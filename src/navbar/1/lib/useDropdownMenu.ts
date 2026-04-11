"use client";

import type { KeyboardEvent } from "react";
import { useEffect, useRef, useState } from "react";
import type { UseDropdownReturn } from "../types";

export const useDropdownMenu = (itemCount: number): UseDropdownReturn => {
  const [open, setOpen] = useState(false);

  const rootRef = useRef<HTMLDivElement | null>(null);
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const itemRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    if (!open) return;

    const onClick = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  useEffect(() => {
    if (!open || itemCount === 0) return;

    requestAnimationFrame(() => {
      itemRefs.current[0]?.focus();
    });
  }, [open, itemCount]);

  const onButtonKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (itemCount === 0) return;

    if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setOpen(true);
    }
  };

  const onMenuKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    const total = itemCount > 0 ? itemCount : itemRefs.current.length;
    if (total === 0) return;

    const idx = itemRefs.current.findIndex(
      (el) => el === document.activeElement,
    );

    if (e.key === "Escape") {
      e.preventDefault();
      setOpen(false);
      btnRef.current?.focus();
      return;
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = (idx + 1 + total) % total;
      itemRefs.current[next]?.focus();
      return;
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      const prev = (idx - 1 + total) % total;
      itemRefs.current[prev]?.focus();
      return;
    }

    if (e.key === "Tab") {
      setOpen(false);
    }
  };

  const setItemRef = (index: number) => (el: HTMLElement | null) => {
    itemRefs.current[index] = el;
  };

  return {
    open,
    setOpen,
    rootRef,
    btnRef,
    setItemRef,
    onButtonKeyDown,
    onMenuKeyDown,
  };
};
