"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "@katebtech/core";
import { Button } from "@katebtech/layout/button";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
export default function CarouselNav({ prevClass, nextClass, className, }) {
    return (_jsxs("div", { className: className ??
            "pointer-events-none absolute inset-y-0 right-0 left-0 z-10 flex items-center justify-between px-2 sm:px-3", children: [_jsx(CarouselNavButton, { ariaLabel: "Previous slide", className: prevClass, children: _jsx(FiChevronLeft, { "aria-hidden": true, className: "h-4 w-4" }) }), _jsx(CarouselNavButton, { ariaLabel: "Next slide", className: nextClass, children: _jsx(FiChevronRight, { "aria-hidden": true, className: "h-4 w-4" }) })] }));
}
const CarouselNavButton = ({ ariaLabel, className, children }) => {
    return (_jsx(Button, { "aria-label": ariaLabel, className: cn(className, "pointer-events-auto"), children: children }));
};
