"use client";
import { useEffect, useRef, useState } from "react";
export const useDropdownMenu = (itemCount) => {
    const [open, setOpen] = useState(false);
    const rootRef = useRef(null);
    const btnRef = useRef(null);
    const itemRefs = useRef([]);
    useEffect(() => {
        if (!open)
            return;
        const onClick = (e) => {
            if (!rootRef.current?.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", onClick);
        return () => document.removeEventListener("mousedown", onClick);
    }, [open]);
    useEffect(() => {
        if (!open || itemCount === 0)
            return;
        requestAnimationFrame(() => {
            itemRefs.current[0]?.focus();
        });
    }, [open, itemCount]);
    const onButtonKeyDown = (e) => {
        if (itemCount === 0)
            return;
        if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setOpen(true);
        }
    };
    const onMenuKeyDown = (e) => {
        const total = itemCount > 0 ? itemCount : itemRefs.current.length;
        if (total === 0)
            return;
        const idx = itemRefs.current.findIndex((el) => el === document.activeElement);
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
    const setItemRef = (index) => (el) => {
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
