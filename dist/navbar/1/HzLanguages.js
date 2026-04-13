import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "@katebtech/core";
import Image from "next/image";
import Link from "next/link";
export const HzLanguage = ({ hzLanguage, href, src, className, }) => {
    if (hzLanguage !== "HZ") {
        return null;
    }
    return (_jsx(Link, { href: href, className: cn("inline-flex items-center", className), "aria-label": "Hazaragi", title: "Hazaragi", children: _jsx(Image, { src: src, alt: "Hazaragi", width: 24, height: 18, className: "h-4 w-auto" }) }));
};
