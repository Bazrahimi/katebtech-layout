import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { MdPhone } from "react-icons/md";
import { Button, P } from "@katebtech/core";
/**
 * Hero call-to-action row with:
 * - a primary CTA button
 * - an optional clickable phone number
 * - a secondary contact button
 *
 * Designed for hero sections where users should be able to quickly
 * request a quote, call directly, or navigate to the contact page.
 *
 * @param props - Component props.
 * @returns Hero CTA action group.
 */
export const HeroCta = ({ quoteHref, contactHref, label, phone, contactLabel = "Contact Us", }) => {
    return (_jsxs("div", { className: "flex flex-col gap-3 sm:flex-row sm:items-center justify-between p-5", children: [_jsx(Button, { as: "link", href: quoteHref, size: "md", children: label }), phone !== "" && (_jsx(P, { className: "rounded-md bg-gray-50 px-3 py-2 text-center", children: _jsxs("a", { href: `tel:${phone}`, className: "inline-flex items-center gap-2", children: [_jsx(MdPhone, { className: "text-lg" }), phone] }) })), _jsx(Button, { as: "link", href: contactHref, variant: "outline", size: "md", children: contactLabel })] }));
};
