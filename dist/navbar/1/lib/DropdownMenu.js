"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { HiChevronDown } from "react-icons/hi";
import { useDropdownMenu } from "./useDropdownMenu";
export const DropdownMenu = ({ buttonContent, menuLabel, itemCount, children, buttonClassName, menuClassName, chevronClassName, align = "center", }) => {
    const { open, setOpen, rootRef, btnRef, setItemRef, onButtonKeyDown, onMenuKeyDown, } = useDropdownMenu(itemCount);
    const alignmentClass = align === "right"
        ? "absolute right-0 top-full"
        : align === "left"
            ? "absolute left-0 top-full"
            : "absolute left-1/2 top-full -translate-x-1/2";
    return (_jsxs("div", { ref: rootRef, className: "relative", children: [_jsxs("button", { ref: btnRef, type: "button", "aria-haspopup": "menu", "aria-expanded": open, onClick: () => setOpen((v) => !v), onKeyDown: onButtonKeyDown, className: buttonClassName, children: [buttonContent, _jsx(HiChevronDown, { className: chevronClassName ??
                            `h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""}` })] }), open && (_jsx("div", { role: "menu", "aria-label": menuLabel, onKeyDown: onMenuKeyDown, className: `${alignmentClass} ${menuClassName ?? ""}`, children: children({
                    setItemRef,
                    closeMenu: () => setOpen(false),
                }) }))] }));
};
