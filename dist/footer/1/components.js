import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Link from "next/link";
import { FooterHeader } from "./FooterHeader";
/**
 * Reusable footer or content section wrapper.
 *
 * Renders a section heading using `FooterHeader`
 * and any child content below it.
 *
 * Example:
 * `<Section title="Quick Links">...</Section>`
 */
export const Section = ({ title, children, className, headerClassName, }) => {
    return (_jsxs("div", { className: className, children: [_jsx(FooterHeader, { className: headerClassName, children: title }), children] }));
};
/**
 * Reusable link-list section for footer or sidebar navigation.
 *
 * Renders:
 * - a section heading
 * - a list of Next.js links
 *
 * Example:
 * `<LinkSection
 *   title="Quick Links"
 *   items={QUICK_LINKS}
 *   listClassName={CN.list}
 *   linkClassName={CN.link}
 * />`
 */
export const LinkSection = ({ title, items, listClassName, linkClassName, headerClassName, }) => {
    return (_jsx(Section, { title: title, headerClassName: headerClassName, children: _jsx("ul", { className: listClassName, children: items.map((item) => (_jsx("li", { children: _jsx(Link, { href: item.href, className: linkClassName, children: item.label }) }, item.href))) }) }));
};
