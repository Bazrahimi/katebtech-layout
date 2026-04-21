"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Link from "next/link";
import { forwardRef } from "react";
import { cn } from "@katebtech/core";
const sizes = {
    xs: "px-2 py-1 text-xs sm:px-3 sm:py-1.5 sm:text-sm",
    sm: "px-4 py-2 text-sm sm:px-5 sm:py-2.5 sm:text-base",
    md: "px-6 py-3 text-base sm:px-7 sm:py-3.5 sm:text-lg",
    lg: "px-8 py-4 text-lg sm:px-10 sm:py-5 sm:text-xl",
};
/**
 * Reusable button component that can render as either:
 * - a native HTML `<button>`
 * - a Next.js `Link`
 *
 * The component shares a consistent visual style across both render modes
 * and supports variants, size presets, icons, and optional full-width layout.
 *
 * @param props - Button props for either button or link rendering.
 * @param ref - Forwarded ref to the underlying button or anchor element.
 * @returns A styled button or link element.
 *
 * @example
 * ```tsx
 * <Button onClick={handleSave}>Save</Button>
 * ```
 *
 * @example
 * ```tsx
 * <Button as="link" href="/contact-us">
 *   Contact Us
 * </Button>
 * ```
 */
export const Button = forwardRef(function Button(props, ref) {
    const { as = "button", children, icon, variant = "primary", size = "md", fullWidth, className, ...rest } = props;
    const variants = {
        primary: "bg-app-s-main text-white hover:bg-app-s-light focus:ring-app-s-dark",
        secondary: "bg-app-p-main text-white hover:bg-app-p-light focus:ring-app-p-dark",
        danger: "bg-red-600 text-white hover:bg-red-500 focus:ring-red-300",
        outline: "border border-app-p-main bg-white text-app-p-main hover:bg-app-p-light focus:ring-app-p-dark",
    };
    const layout = fullWidth
        ? "flex w-full justify-center"
        : "inline-flex justify-center";
    const classes = cn("font-app-ui", layout, "items-center gap-2 rounded-lg font-semibold shadow-md", "transition-transform duration-200 focus:outline-none focus:ring-4 hover:scale-105", "cursor-pointer", variants[variant], sizes[size], className);
    if (as === "link") {
        const { href, ...anchorRest } = rest;
        return (_jsxs(Link, { href: href, className: classes, ref: ref, ...anchorRest, children: [icon && _jsx("span", { className: "flex-shrink-0", children: icon }), children] }));
    }
    return (_jsxs("button", { className: classes, ref: ref, ...rest, children: [icon && _jsx("span", { className: "flex-shrink-0", children: icon }), children] }));
});
