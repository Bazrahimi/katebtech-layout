import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "@katebtech/core";
import Image from "next/image";
import Link from "next/link";
export const HzLanguage = ({ hzLanguage, href, src, text, className, }) => {
    if (hzLanguage !== "HZ") {
        return null;
    }
    const label = text ?? "Hazaragi";
    return (_jsx(Link, { href: href, className: cn("inline-flex items-center", className), "aria-label": label, title: label, children: text ? (_jsx("span", { className: "text-sm font-medium leading-none", children: text })) : src ? (_jsx(Image, { src: src, alt: label, width: 24, height: 18, className: "h-4 w-auto" })) : null }));
};
