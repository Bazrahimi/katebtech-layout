import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { cn, KATEB_TECH_LOGO } from "@katebtech/core";
import Image from "next/image";
/**
 * Reusable footer credit block with copyright text and
 * a "Built by Kateb Tech" badge link.
 *
 * It renders:
 * - the current year
 * - the provided organisation name
 * - a small external link to Kateb Tech
 *
 * Usage:
 * `<PoweredByKateb orgName={op.orgName} />`
 */
export const PoweredByKateb = ({ orgName, className }) => {
    const year = new Date().getFullYear();
    return (_jsxs("div", { className: cn("mt-3 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-200", className), children: [_jsxs("span", { children: ["\u00A9 ", year, " ", orgName, ". All rights reserved."] }), _jsx("span", { className: "opacity-40", children: "|" }), _jsxs("a", { href: "https://www.katebtech.com.au", target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 ring-1 ring-black/10 transition hover:bg-white", children: [_jsx(Image, { src: KATEB_TECH_LOGO, alt: "Kateb Tech | Kateb Technology", width: 16, height: 16, unoptimized: true }), _jsxs("span", { className: "font-semibold text-gray-500", children: ["Built by", " ", _jsx("span", { style: { color: "#f59e0b" }, className: "font-bold", children: "Kateb Tech" })] })] })] }));
};
