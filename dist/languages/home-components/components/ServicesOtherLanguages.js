import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn, Header, List, P } from "@katebtech/core";
import { HzLanguage } from "@katebtech/layout/navbar/1";
/**
 * Displays a right-to-left service summary card for translated service content.
 *
 * This component:
 * - shows the translated service heading
 * - provides a language switch / translated content link
 * - renders translated subcategory labels in a two-column grid list
 * - uses RTL layout for Persian / Hazaragi presentation
 *
 * The first item in `otherLangKeys` is used for the `HzLanguage` link component.
 *
 * Example:
 * ```tsx
 * <ServicesOtherLanguages
 *   serviceLabelFarsi="خدمات انتقال ملک"
 *   subcategoryLabelsFarsi={["خرید خانه", "فروش خانه"]}
 *   otherLangKeys={["HZ"]}
 *   src="/images/hz-flag.svg"
 *   href="/hz/services/property-transfer"
 * />
 * ```
 */
export const ServicesOtherLanguages = ({ serviceLabelFarsi, subcategoryLabelsFarsi, otherLangKeys, src, href, className, }) => {
    return (_jsxs("article", { dir: "rtl", className: cn("rounded-2xl border border-slate-200 bg-white/70 p-5 shadow-sm backdrop-blur sm:p-7", className), "aria-label": serviceLabelFarsi, children: [_jsxs("header", { className: "space-y-3", children: [_jsxs("div", { className: "flex items-center justify-between gap-3", children: [_jsx(Header, { as: "h3", align: "right", className: "text-slate-900", children: serviceLabelFarsi }), _jsxs("div", { children: [_jsx(P, { className: "inline-flex", children: "\u0628\u06CC\u0634\u062A\u0631 \u062F\u0631 \u0632\u0628\u0627\u0646\u0647\u0627\u06CC " }), " ", _jsx(HzLanguage, { src: src, hzLanguage: otherLangKeys[0], href: href, className: "inline-flex cursor-pointer items-center rounded-md px-1 text-sky-700 underline decoration-sky-300 underline-offset-2 transition hover:text-sky-800 hover:decoration-sky-500 focus-visible:ring-2 focus-visible:ring-sky-400/60 focus-visible:outline-none" })] })] }), _jsx("div", { className: "h-px w-full bg-slate-200/70" })] }), _jsx(List, { items: subcategoryLabelsFarsi, layout: "grid", columns: 2, className: "mt-4 border-0 bg-transparent px-0 py-0", itemClassName: "rounded-xl border border-slate-200/60 bg-slate-50/80 px-3 py-2", textClassName: "bg-transparent border-0 px-0 text-slate-800" })] }));
};
